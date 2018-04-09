import React, { Component } from 'react';
import { Header, PageTemplate, PolyBackground, Block } from 'components';

class HomePage extends Component{
    render(){
        return (
            <PageTemplate 
                header = {<Header />} >
                <PolyBackground>
                    <Block center shadow>
                        <h1>
                            Trade on Exchange Simulator
                        </h1>
                        <h2>
                            All trades are based on real time market data
                        </h2>
                    </Block>
                </PolyBackground>
            </PageTemplate>
        )
    }
}

export default HomePage;