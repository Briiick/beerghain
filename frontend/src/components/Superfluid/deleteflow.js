import React, { useState } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import { Button, Form, FormGroup, FormControl, Spinner } from "react-bootstrap";
import { ethers } from "ethers";

import { useAccount } from 'wagmi';

const airbnb_address = "0x90E0c4e21baA20c5E9591Ce37c1F30da9DE976A6";

//where the Superfluid logic takes place
async function deleteFlow(recipient, data) {
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
    const deleteFlowOperation = sf.cfaV1.deleteFlow({
      sender: data.address,
      receiver: recipient,
      superToken: DAIx
      // userData?: string
    });

    console.log("Deleting your stream...");

    await deleteFlowOperation.exec(signer);

    console.log(
      `Congrats - you've just deleted your money stream!
       Network: Kovan
       Super Token: DAIx
       Sender: ${data.address}
       Receiver: ${recipient}
    `
    );
  } catch (error) {
    console.error(error);
  }
}

export const DeleteFlow = () => {
    const { data } = useAccount();
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    function DeleteButton({ isLoading, children, ...props }) {
    return (
        <Button variant="success" className="button" {...props}>
        {isButtonLoading ? <Spinner animation="border" /> : children}
        </Button>
    );
    }


    return (
        <div>
            <h2>Delete a Flow</h2>
            <Form>
            {/* <Button onClick={() => deleteFlow(recipient)}> */}
            <DeleteButton
                onClick={() => {
                setIsButtonLoading(true);
                deleteFlow(airbnb_address, data);
                setTimeout(() => {
                    setIsButtonLoading(false);
                }, 1000);
                }}
            >
                Click to Delete Your Stream
            </DeleteButton>
            </Form>
        </div>
    );
};
