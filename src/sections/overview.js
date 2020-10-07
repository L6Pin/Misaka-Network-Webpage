import React from 'react';
import OverviewCard from '../components/overview_card';
import mnJap from '../img/mnJap.png';

//Card content
var cardTitle_1 = "Sister";
var cardDesc_1 = "Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"

// var cardTitle_2 = "Sister";
// var cardDesc_2 = "Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"

// var cardTitle_3 = "Sister";
// var cardDesc_3 = "Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"

const Overview = () => (
    <section id="overview" class="overview container">
        <img src={mnJap} alt="" class="mnJap"/>
        <h2 class=" overview__title ">OVERVIEW</h2>
        <p class="overview__subtitle ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias architecto repudiandae nam aliquid exercitationem ratione unde reiciendis minus perferendis asperiores?</p>

        <div class="cards ">
        <OverviewCard cardTitle={cardTitle_1} cardDescription={cardDesc_1}/>
        <OverviewCard cardTitle={cardTitle_1} cardDescription={cardDesc_1}/>
        <OverviewCard cardTitle={cardTitle_1} cardDescription={cardDesc_1}/>
        </div>
    </section>
);

export default Overview;