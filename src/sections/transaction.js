import React from 'react';
import transaction_banner from '../img/transaction_banner.png';
import logo from '../img/logo.png';

const Transaction = () => (
    <section class="transaction container">
        <h2 class="transaction__title gradientLetters">TRANSACTIONS</h2>
        <p class="transaction__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div class="blocks">

            <div class="tBlock">
                <div class="tBlock__images">
                    <div class="image_container"><img src={transaction_banner} alt="" /></div>
                    <div class="image_container"><img src={logo} alt="" /></div>
                </div>
                <div class="tBlock__content container">
                    <p><span>ID:</span> 3252321424690e124rmdd3dk1...</p>
                    <p><span>FROM</span> 55576324142412431nf326...</p>
                    <p><span>TO:</span> 777332434523523523533dc3</p>
                    <p><span>AMOUNT:</span> 1.000MC</p>
                </div>
            </div>
            <div class="tBlock">
                <div class="tBlock__images">
                    <div class="image_container"><img src={transaction_banner} alt="" /></div>
                    <div class="image_container"><img src={logo} alt="" /></div>
                </div>
                <div class="tBlock__content container">
                    <p><span>ID:</span> 3252321424690e124rmdd3dk1...</p>
                    <p><span>FROM</span> 55576324142412431nf326...</p>
                    <p><span>TO:</span> 777332434523523523533dc3</p>
                    <p><span>AMOUNT:</span> 1.000MC</p>
                </div>
            </div>
            <div class="tBlock">
                <div class="tBlock__images">
                    <div class="image_container"><img src={transaction_banner} alt="" /></div>
                    <div class="image_container"><img src={logo} alt="" /></div>
                </div>
                <div class="tBlock__content container">
                    <p><span>ID:</span> 3252321424690e124rmdd3dk1...</p>
                    <p><span>FROM</span> 55576324142412431nf326...</p>
                    <p><span>TO:</span> 777332434523523523533dc3</p>
                    <p><span>AMOUNT:</span> 1.000MC</p>
                </div>
            </div>
        </div>

    </section>
);

export default Transaction;