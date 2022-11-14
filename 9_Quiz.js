let answer = 0;
let quizAnswer = 0;
let count = 0;

function question(){
    const rand = Math.floor((Math.random() * 20));
    switch(rand){
        case 1:
            answer = prompt("'우겨넣다(1)'와 '욱여넣다(2)' 어떤 것이 맞는 말?");
            document.write("'우겨넣다(1)'와 '욱여넣다(2)' 어떤 것이 맞는 말?");
            quizAnswer = 2;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 2:
            answer = prompt("'사단(1)'과 '사달(2)' 어떤 것이 맞는 말?");
            document.write("'사단(1)'과 '사달(2)' 어떤 것이 맞는 말?");
            quizAnswer = 2;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 3:
            answer = prompt("'닭개장(1)'과 '닭계장(2)' 어떤 것이 맞는 말?");
            document.write("'닭개장(1)'과 '닭계장(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 4:
            answer = prompt("'있음에(1)'와 '있으매(2)' 어떤 것이 맞는 말?");
            document.write("'있음에(1)'와 '있으매(2)' 어떤 것이 맞는 말?");
            quizAnswer = 2;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 5:
            answer = prompt("'어디에다'의 준말로 옳은 것은?<br>1. 어따 / 2.얻다");
            document.write("'어디에다'의 준말로 옳은 것은?<br>1. 어따 / 2.얻다");
            quizAnswer = 2;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 6:
            answer = prompt("'곰곰이(1)'와 '곰곰히(2)' 어떤 것이 맞는 말?");
            document.write("'곰곰이(1)'와 '곰곰히(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 7:
            answer = prompt("'금새(1)'와 '금세(2)' 어떤 것이 맞는 말?");
            document.write("'금새(1)'와 '금세(2)' 어떤 것이 맞는 말?");
            quizAnswer = 2;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 8:
            answer = prompt("'웬일(1)'과 '왠일(2)' 어떤 것이 맞는 말?");
            document.write("'웬일(1)'과 '왠일(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 9:
            answer = prompt("'깨방정(1)'과 '개방정(2)' 어떤 것이 맞는 말?");
            document.write("'깨방정(1)'과 '개방정(2)' 어떤 것이 맞는 말?");
            quizAnswer = 2;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 10:
            answer = prompt("'주꾸미(1)'와 '쭈꾸미(2)' 어떤 것이 맞는 말?");
            document.write("'주꾸미(1)'와 '쭈꾸미(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 11:
            answer = prompt("'유도신문(1)'과 '유도심문(2)' 어떤 것이 맞는 말?");
            document.write("'유도신문(1)'과 '유도심문(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 12:
            answer = prompt("'시답잖은(1)'과 '시덥잖은(2)' 어떤 것이 맞는 말?");
            document.write("'시답잖은(1)'과 '시덥잖은(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 13:
            answer = prompt("'떡볶이(1)'와 '떡볶기(2)' 어떤 것이 맞는 말?");
            document.write("'떡볶이(1)'와 '떡볶기(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 14:
            answer = prompt("'알은 체(1)'와 '아는 체(2)' 어떤 것이 맞는 말?");
            document.write("'알은 체(1)'와 '아는 체(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 15:
            answer = prompt("'구시렁(1)'과 '궁시렁(2)' 어떤 것이 맞는 말?");
            document.write("'구시렁(1)'과 '궁시렁(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 16:
            answer = prompt("'일사분란(1)'과 '일사불란(2)' 어떤 것이 맞는 말?");
            document.write("'일사분란(1)'과 '일사불란(2)' 어떤 것이 맞는 말?");
            quizAnswer = 2;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 17:
            answer = prompt("'몇 일(1)'과 '며칠(2)' 어떤 것이 맞는 말?");
            document.write("'몇 일(1)'과 '며칠(2)' 어떤 것이 맞는 말?");
            quizAnswer = 2;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 18:
            answer = prompt("'틈틈이(1)'와 '틈틈히(2)' 어떤 것이 맞는 말?");
            document.write("'틈틈이(1)'와 '틈틈히(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 19:
            answer = prompt("'뭐예요(1)'와 '뭐에요(2)' 어떤 것이 맞는 말?");
            document.write("'뭐예요(1)'와 '뭐에요(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
        case 20:
            answer = prompt("'핼쑥하다(1)'와 '핼쓱하다(2)' 어떤 것이 맞는 말?");
            document.write("'핼쑥하다(1)'와 '핼쓱하다(2)' 어떤 것이 맞는 말?");
            quizAnswer = 1;
            document.write(`<br>정답: ${quizAnswer} / 체크: ${answer}<br>`);
            if(quizAnswer == answer){
                document.write(`<p><b style='color:blue'>정답입니다.</b><br></p>`);
                count++;
            }else if(quizAnswer != answer){
                document.write(`<p><b style='color:red'>틀렸습니다.</b><br></p>`);
            }
            if(!answer || answer <= 0 || answer >= 3){
                alert('1 또는 2를 입력해주세요');
            }
            break;
    }
}
function replace(){
    if(count <= 2) {
        alert('모든 문제를 맞추지 못해 재시험입니다.');
        location.replace(location.href);
    }
}
const wait = (f, t) => new Promise((resolve) => setTimeout(resolve, t)).then(f);

async function quiz(){
    await wait(0,0);
    document.write('<br><p><h3>문제 1번</h3></p><hr>');
    question();
    document.write('<br><p><h3>문제 2번</h3></p><hr>');
    await wait(question,3000);
    document.write('<br><p><h3>문제 3번</h3></p><hr>');
    await wait(question,3000);
    await wait(replace,2000);
}
quiz();