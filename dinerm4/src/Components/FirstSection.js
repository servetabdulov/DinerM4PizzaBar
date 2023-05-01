import React, { Component } from 'react'
import styled from "styled-components";
import pizza from "../img/pizza.jpg"

const Section = styled.section`
 display: flex;
 background-color: red;

`;
export default class FirstSection extends Component {
  render() {
    return (
      <Section>
        <div>
            <h2>sss</h2>
            <h1>efef</h1>
            <p>fr</p>
            <button>f</button>
        </div>
        <div>
            <div>
                <h3>rg</h3>
                <h4>gr</h4>
            </div>
            <img src={pizza} alt="s" width="490px"/>
        </div>
      </Section>
    )
  }
}
