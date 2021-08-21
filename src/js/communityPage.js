

function changedCategory(category) {
    switch (category) {
        case "newest":
            document.getElementsByClassName("communityTitleSpan")[0].innerHTML="🔥최신글🔥";
            document.getElementsByClassName("communityTitleDetail")[0].innerHTML="가장 최근에 올라온 글을 확인해보세요!";
            break;
        case "question":
            document.getElementsByClassName("communityTitleSpan")[0].innerHTML="🤷‍♀️질문🤷‍♀️";
            document.getElementsByClassName("communityTitleDetail")[0].innerHTML="궁금한 게 있으면 무엇이든 물어보세요!";
            break;
        case "dayLife":
            document.getElementsByClassName("communityTitleSpan")[0].innerHTML="🙌일상🙌";
            document.getElementsByClassName("communityTitleDetail")[0].innerHTML="요즘 어떻게 지내고 있나요? 일상을 공유해주세요!";
            break;
        case "etc":
            document.getElementsByClassName("communityTitleSpan")[0].innerHTML="🎸기타🎸";
            document.getElementsByClassName("communityTitleDetail")[0].innerHTML="아무거나, 올리고 싶은대로, 마음대로!";
            break;
        default:
            break;
    }
}