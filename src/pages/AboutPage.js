import React from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";
import { Container, Image } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <div>

      <Header />
      <main className='centered' style={{ width: "50%" }}>
        <Container>
        <Image src="\logo.png" rounded fluid={true} />
          <h1>About Page</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, error distinctio? Alias aperiam iusto quibusdam architecto voluptatum vero atque harum. Nihil fugit, dolorum optio ipsam, debitis delectus quasi veniam, nam officiis ratione nobis impedit recusandae cum commodi beatae maxime voluptatem aperiam expedita consectetur nulla? Eligendi suscipit corrupti possimus unde veniam dolor assumenda! Deleniti asperiores possimus mollitia nisi? Consequatur doloremque assumenda magnam enim vitae quam dolore nesciunt quod, quis optio ipsam at, dolores incidunt nostrum repudiandae possimus ducimus ipsum quidem repellat ipsa quibusdam, modi hic non! Illum delectus earum inventore, in ducimus nihil. Quasi accusamus suscipit voluptate iste! Non, enim ullam.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, error distinctio? Alias aperiam iusto quibusdam architecto voluptatum vero atque harum. Nihil fugit, dolorum optio ipsam, debitis delectus quasi veniam, nam officiis ratione nobis impedit recusandae cum commodi beatae maxime voluptatem aperiam expedita consectetur nulla? Eligendi suscipit corrupti possimus unde veniam dolor assumenda! Deleniti asperiores possimus mollitia nisi? Consequatur doloremque assumenda magnam enim vitae quam dolore nesciunt quod, quis optio ipsam at, dolores incidunt nostrum repudiandae possimus ducimus ipsum quidem repellat ipsa quibusdam, modi hic non! Illum delectus earum inventore, in ducimus nihil. Quasi accusamus suscipit voluptate iste! Non, enim ullam.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, error distinctio? Alias aperiam iusto quibusdam architecto voluptatum vero atque harum. Nihil fugit, dolorum optio ipsam, debitis delectus quasi veniam, nam officiis ratione nobis impedit recusandae cum commodi beatae maxime voluptatem aperiam expedita consectetur nulla? Eligendi suscipit corrupti possimus unde veniam dolor assumenda! Deleniti asperiores possimus mollitia nisi? Consequatur doloremque assumenda magnam enim vitae quam dolore nesciunt quod, quis optio ipsam at, dolores incidunt nostrum repudiandae possimus ducimus ipsum quidem repellat ipsa quibusdam, modi hic non! Illum delectus earum inventore, in ducimus nihil. Quasi accusamus suscipit voluptate iste! Non, enim ullam.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, error distinctio? Alias aperiam iusto quibusdam architecto voluptatum vero atque harum. Nihil fugit, dolorum optio ipsam, debitis delectus quasi veniam, nam officiis ratione nobis impedit recusandae cum commodi beatae maxime voluptatem aperiam expedita consectetur nulla? Eligendi suscipit corrupti possimus unde veniam dolor assumenda! Deleniti asperiores possimus mollitia nisi? Consequatur doloremque assumenda magnam enim vitae quam dolore nesciunt quod, quis optio ipsam at, dolores incidunt nostrum repudiandae possimus ducimus ipsum quidem repellat ipsa quibusdam, modi hic non! Illum delectus earum inventore, in ducimus nihil. Quasi accusamus suscipit voluptate iste! Non, enim ullam.
          </p>

        </Container>
      </main>
      <Footer />

    </div>
  )
}

export default AboutPage