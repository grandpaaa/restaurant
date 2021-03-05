import React from 'react'
import './menu.css'
import {Tabs} from 'antd'

function Menu() {
    function callback(key) {
        console.log(key);
    }
    const { TabPane } = Tabs;
    return(
        <div class="menu">
            <Tabs defaultActiveKey="1" onChange={callback} class="tabs">
                <TabPane tab="ALL" key="1">
                    <div class="meal">
                        <h3>OLD TIMER'S BREAKFAST.....$22.00</h3>
                        <p>( Two eggs cooked to order with grits, sawmill gravy, homemade buttermilk biscuits & real butter )</p>
                    </div>
                    <div class="meal">
                        <h3>FRESH START SAMPLER.....$37.00</h3>
                        <p>( Start your day with a mix of low fat vanilla yogurt, fresh seasonal fruit topped with our honey mix )</p>
                    </div>
                    <div class="meal">
                        <h3>DOUBLE MEAT BREAKFAST.....$42.00</h3>
                        <p>( Three eggs cooked to order with a full order of bacon and sausage patties )</p>
                    </div>
                    <div class="meal">
                        <h3>CRAB & AVOCADO BRUSCHETTA.....$22.00</h3>
                        <p>( Fresh white&brown crab, crunchy fennel, smashed avocado, yoghurt & chilli )</p>
                    </div>
                    <div class="meal">
                        <h3>TIRAMISÙ.....$22.00</h3>
                        <p>( The classic Italian dessert topped with chocolate shavings & orange zest. )</p>
                    </div>
                    <div class="meal">
                        <h3>FRITTO MISTO.....$22.00</h3>
                        <p>( Mixed seasonal flash-fried sustainable fish & shellfish served with chunky Italian tartare sauce & lemon. )</p>
                    </div>
                    <div class="meal">
                        <h3>THREE-CHEESE CARAMELLE.....$22.00</h3>
                        <p>( Beautiful filled pasta with ricotta, provolone, bella lodi & spinach, served with creamy tomato, garlic, basil & rosé wine sauce. )</p>
                    </div>
                    <div class="meal">
                        <h3>MONTEPULCIANO D’ABRUZZO.....$22.00</h3>
                        <p>( Cherry & chocolate flavours are typical of this well-known grape )</p>
                    </div>
                    <div class="meal">
                        <h3>ITALIAN STEAK FRITES.....$22.00</h3>
                        <p>( Flash-grilled prime beef steak, served with Italian-spiced skinny fries & crunchy vegetable slaw. )</p>
                    </div>
                    <div class="meal">
                        <h3>TURKEY MILANESE.....$22.00</h3>
                        <p>( Stuffed with prosciutto & provolone, breadcrumbed & topped with a free-range egg & black summer truffle. )</p>
                    </div>
                    <div class="meal">
                        <h3>OUR FAMOUS PRAWN LINGUINE.....$22.00</h3>
                        <p>( Fried garlicky prawns, fennel, tomatoes, chilli, saffron, fish broth & lemony rocket. )</p>
                    </div>
                    <div class="meal">
                        <h3>GNOCCHI GENOVESE.....$22.00</h3>
                        <p>( Potato gnocchi with green beans, crushed purple potatoes, basil pesto, toasted pine nuts, bella lodi & ricotta. )</p>
                    </div>
                </TabPane>
                <TabPane tab="BREAKFAST" key="2">
                    <div class="meal">
                        <h3>OLD TIMER'S BREAKFAST.....$22.00</h3>
                        <p>( Two eggs cooked to order with grits, sawmill gravy, homemade buttermilk biscuits & real butter )</p>
                    </div>
                    <div class="meal">
                        <h3>FRESH START SAMPLER.....$37.00</h3>
                        <p>( Start your day with a mix of low fat vanilla yogurt, fresh seasonal fruit topped with our honey mix )</p>
                    </div>
                    <div class="meal">
                        <h3>DOUBLE MEAT BREAKFAST.....$42.00</h3>
                        <p>( Three eggs cooked to order with a full order of bacon and sausage patties )</p>
                    </div>
                    <div class="meal">
                        <h3>CRAB & AVOCADO BRUSCHETTA.....$22.00</h3>
                        <p>( Fresh white&brown crab, crunchy fennel, smashed avocado, yoghurt & chilli )</p>
                    </div>
                </TabPane>
                <TabPane tab="LUNCHES" key="3">
                    <div class="meal">
                        <h3>FRITTO MISTO.....$22.00</h3>
                        <p>( Mixed seasonal flash-fried sustainable fish & shellfish served with chunky Italian tartare sauce & lemon. )</p>
                    </div>
                    <div class="meal">
                        <h3>ITALIAN STEAK FRITES.....$22.00</h3>
                        <p>( Flash-grilled prime beef steak, served with Italian-spiced skinny fries & crunchy vegetable slaw. )</p>
                    </div>
                    <div class="meal">
                        <h3>TURKEY MILANESE.....$22.00</h3>
                        <p>( Stuffed with prosciutto & provolone, breadcrumbed & topped with a free-range egg & black summer truffle. )</p>
                    </div>
                </TabPane>
                <TabPane tab="DINNERS" key="4">
                    <div class="meal">
                        <h3>OUR FAMOUS PRAWN LINGUINE.....$22.00</h3>
                        <p>( Fried garlicky prawns, fennel, tomatoes, chilli, saffron, fish broth & lemony rocket. )</p>
                    </div>
                    <div class="meal">
                        <h3>GNOCCHI GENOVESE.....$22.00</h3>
                        <p>( Potato gnocchi with green beans, crushed purple potatoes, basil pesto, toasted pine nuts, bella lodi & ricotta. )</p>
                    </div>
                </TabPane>
                <TabPane tab="DESSERTS" key="5">
                    <div class="meal">
                        <h3>TIRAMISÙ.....$22.00</h3>
                        <p>( The classic Italian dessert topped with chocolate shavings & orange zest. )</p>
                    </div>
                </TabPane>
                <TabPane tab="DRINKS" key="6">
                    <div class="meal">
                        <h3>MONTEPULCIANO D’ABRUZZO.....$22.00</h3>
                        <p>( Cherry & chocolate flavours are typical of this well-known grape )</p>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Menu