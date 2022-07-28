import { FC, useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";

import { ImagesData } from "../../types/types";
import { Container, Border, Image, Wrapper, DeleteButton } from "./styles";

export const Body: FC = () => {
  const [data, setData] = useState<ImagesData[]>([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setData(Object.values(data));
      }
    });
  }, []);

  return (
    <Container style={{}}>
      {!!data.length &&
        data.map((el) => (
          <Wrapper key={el.id}>
            <Image src={el.url} alt="" />
            <Border>  <DeleteButton> Delete </DeleteButton>  </Border>
          </Wrapper>
        ))}
    </Container>
  );
};
