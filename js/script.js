function readMore() {
    let moreBtn = document.getElementById('more-btn');
    let moreTime = document.querySelectorAll('.item-times__time-hidden');


    for (let i = 0; i < moreTime.length; i++) {
        moreTime[i].classList.add('open');

        if (window.innerWidth < 445) {

            moreTime[0].style.marginRight = 0;

            for (let i = 4; i < moreTime.length; i += 4) {
                moreTime[i].style.marginRight = 0;

            }
        }
    }

    moreBtn.style.display = "none";

}