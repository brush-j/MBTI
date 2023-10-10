const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

function start() {
    main.style.display = "none";
    qna.style.display = "block";
    result.style.display = "none";

    next(0);
}

function next(pageIdx) {
    let title = document.querySelector(".question #title");
    let answer_a = document.querySelector(".answers #A");
    let answer_a_btn = document.querySelector(".answers #A .btn_select");
    let answer_b = document.querySelector(".answers #B");
    let answer_b_btn = document.querySelector(".answers #B .btn_select");
    let page = document.querySelector("input[id='page']");
    let pageCnt = document.querySelector(".page #cnt");

    title.innerHTML = qnaList[pageIdx].q;
    answer_a.href = `javascript:select('${qnaList[pageIdx].a[0].type}')`;
    answer_a_btn.innerHTML = qnaList[pageIdx].a[0].answer;
    answer_b.href = `javascript:select('${qnaList[pageIdx].a[1].type}')`;
    answer_b_btn.innerHTML = qnaList[pageIdx].a[1].answer;
    page.value = ++pageIdx;
    pageCnt.innerText = pageIdx;
}

function select(type) {
    let mbtiType = document.querySelector(`#qna input[id=${type}]`);
    let pageIdx = document.querySelector("input[id='page']").value;

    mbtiType.value = ++mbtiType.value;

    if (pageIdx < 20) {
        next(pageIdx);
    } else {
        end();
    }
}

function end() {
    qna.style.display = "none";
    result.style.display = "block";

    let mbti = JSON.stringify({
        E : document.getElementById("E").value,
        I : document.getElementById("I").value,
        S : document.getElementById("S").value,
        N : document.getElementById("N").value,
        T : document.getElementById("T").value,
        F : document.getElementById("F").value,
        P : document.getElementById("P").value,
        J : document.getElementById("J").value
    });
    mbtiReset();

    $.ajax({
        url : `/mbti/result`,
        headers: {'Content-Type': 'application/json'},
        data : mbti,
        type : "POST",

        success: function(data) {
            document.querySelector("#result #result_img").src = `./img/${data}.png`;

            document.querySelector("#result .fin").style.display = "block";
        },

        error: function(request, status, error) {
            qna.style.display = "block";
            result.style.display = "none";
    
            console.log(error);
        }
    });
}

function retest() {
    main.style.display = "flex";
    qna.style.display = "none";
    result.style.display = "none";
}

function mbtiReset() {
    document.getElementById("E").value = 0;
    document.getElementById("I").value = 0;
    document.getElementById("S").value = 0;
    document.getElementById("N").value = 0;
    document.getElementById("T").value = 0;
    document.getElementById("F").value = 0;
    document.getElementById("P").value = 0;
    document.getElementById("J").value = 0;
}
