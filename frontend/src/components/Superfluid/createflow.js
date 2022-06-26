import React, { useState, useEffect } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import { Button, Form, FormGroup, FormControl, Spinner } from "react-bootstrap";
import { ethers } from "ethers";

import { useAccount } from 'wagmi';

import axios from "axios";

const airbnb_address = "0x90E0c4e21baA20c5E9591Ce37c1F30da9DE976A6";

//where the Superfluid logic takes place
async function createNewFlow(recipient, flowRate, data) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider
    });

    const DAIxContract = await sf.loadSuperToken("fDAIx");
    const DAIx = DAIxContract.address;

    try {
      const createFlowOperation = sf.cfaV1.createFlow({
        receiver: recipient,
        flowRate: flowRate,
        superToken: DAIx
        // userData?: string
      });

      console.log("Creating your stream...");

      const result = await createFlowOperation.exec(signer);
      console.log(result);

      console.log(
        `Congrats - you've just created a money stream!
      View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
      Network: Rinkeby
      Super Token: DAIx
      Sender: ${data.address}
      Receiver: ${recipient}
      FlowRate: ${flowRate}
      `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
}

export const CreateFlow = () => {
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [flowRate, setFlowRate] = useState("");
    const [flowRateDisplay, setFlowRateDisplay] = useState("");
    const { data } = useAccount();
    const [ethValue, setEthValue] = useState([]);

    const getEthValue = async () => {
      const { ethValue } = await axios.get(`https://api.covalenthq.com/v1/1/address/0x2f9c12a06033E208d1035aEE070E594857C7E999/balances_v2/?key=ckey_e973180e3bd940899f9500a3f85`);
      setEthValue(ethValue['data']['data']['items'][0]['quote_rate']);
    };

    useEffect(() => {
      getEthValue();
    }, []);

    console.log("Logged into account: ", data.address);

    function calculateFlowRate(amount) {
      if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
        alert("You can only calculate a flowRate based on a number");
        return;
      } else if (typeof Number(amount) === "number") {
        if (Number(amount) === 0) {
          return 0;
        }
        const amountInWei = ethers.BigNumber.from(amount);
        const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
        const calculatedFlowRate = monthlyAmount * 3600 * 24 * 30;
        return calculatedFlowRate;
      }
    }

    function CreateButton({ isLoading, children, ...props }) {
      return (
        <Button variant="success" className="button" {...props}>
          {isButtonLoading ? <Spinner animation="border" /> : children}
        </Button>
      );
    }

    const handleFlowRateChange = (e) => {
      setFlowRate(() => ([e.target.name] = e.target.value));
      let newFlowRateDisplay = calculateFlowRate(e.target.value);
      setFlowRateDisplay(newFlowRateDisplay.toString());
    };

    const valueOfEth =  getEthValue();
    console.log("Value of ETH: ", valueOfEth);

    return (
      <div>
        <h2>Create a Flow</h2>
        {!data ? (
        <p>You should connect your wallet.</p>
      ) : (
        <>
            <Form>
                <FormGroup className="mb-3">
                    <FormControl
                        name="flowRate"
                        value={flowRate}
                        onChange={handleFlowRateChange}
                        placeholder="Enter a flowRate in wei/second"
                    ></FormControl>
                </FormGroup>
                <CreateButton
                    onClick={() => {
                        setIsButtonLoading(true);
                        createNewFlow(airbnb_address, flowRate, data);
                        setTimeout(() => {
                            setIsButtonLoading(false);
                        }, 1000);
                    } }
                >
                Click to Create Your Stream
                </CreateButton>
            </Form>
            <div className="description">
                <div className="calculation">
                    <p>Your flow will be equal to:</p>
                    <p>
                        <b>${flowRateDisplay !== " " ? flowRateDisplay : 0}</b> DAIx/month
                        <b>${ethValue}</b>
                    </p>
                </div>
            </div>
        </>
        )}
        </div>
    );
};
