import React, { useEffect, useState } from 'react';
import { Wrapper, Cell, Border, Header, Heading, InnerCell, Stage, Arrow } from './styles';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export const UserList = (props) => {
  const [index, setIndex] = useState(1);
  const [dummy, setDummy] = useState(0);

  const ITEMSPERPAGE = 4;
  const num_users = Object.keys(props.users).length;
  const pages = Math.floor(num_users / ITEMSPERPAGE) + 1;
  const minHeight = 40 + Math.min(num_users, ITEMSPERPAGE) * 60;
  const leftOver = ITEMSPERPAGE - (num_users % ITEMSPERPAGE);
  console.log(props.users, "ASDASDS", num_users)

    return (
      <span >
        <Wrapper>
        {!!num_users ?

          <Border minHeight={minHeight}>
            <Header>
              <Heading><h6>User</h6></Heading>
              <Heading><h6>Timestamp</h6></Heading>
              <Heading><h6>Action</h6></Heading>
            </Header>
            
            {Object.keys(props.users).map((x, p) => {
              let i = p + 1

                return (
                  <Cell hidden={!(i <= (ITEMSPERPAGE * index) && i > (ITEMSPERPAGE * (index - 1)))} key={i}>
                    <InnerCell>{x}</InnerCell>
                    <InnerCell>{props.users[x].timeStamp}</InnerCell>
                    <InnerCell>
                      {<Stage>Issue Claim</Stage>}
                    </InnerCell>
                  </Cell>
                )
            })}
            {[...Array(leftOver)].map((x, i) => {
              let j = i + num_users + 1;
              return (
                <Cell key={j} hidden={j > (ITEMSPERPAGE * index)}>
                    <InnerCell>{" - "}</InnerCell>
                    <InnerCell>{" - "}</InnerCell>
                    <InnerCell>
                      {" - "}
                    </InnerCell>
                  </Cell>
              )
            })}
            <Cell last>
              <InnerCell>
                <Arrow disabled={index === 1}><IoChevronBack style={{ marginRight: '3px' }} size={20} onClick={() => !(index === 1) && setIndex(index - 1)}/></Arrow>
                  {index} / {pages}
                <Arrow disabled={index === pages}><IoChevronForward style={{ marginLeft: '3px' }} size={20}  onClick={() => !(index === pages) && (setIndex(index + 1), setDummy(dummy + 1))}/></Arrow>
              </InnerCell>
            </Cell>

          </Border>
          : 
          <p style={{ textAlign: 'center', paddingRight: '10vw', paddingLeft: '10vw'}}>
            No users to show yet! Work on growth marketing pls
          </p>
        }
        </Wrapper>
      </span>
  );
}

export default UserList;