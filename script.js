const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know that i am gonna set you free na talaga, pipilitin kong kayanin lahat kahit alam kong baka di ko kayanin. You are my only safe place. Naiinis lang talaga ako sa sarili ko kung bat apaka insecure ko. Mahal na mahal kita lovelove.. i hope na makita kita sa personal para maprove ko sayo yun lahat nang di lang sa words. yk i put this effort 3 days anghirap mag programming HSHAHA. I know na di parin sapat to. 1 week kapalang nawala pero walang gana na ako sa lahat. Ikaw yung iisa na taong kausap ko sa lahat ng oras. nasanay na akong nandito ka lagi. Ansakit isipin na mag ggraduate ako nang wala yung dahilan ng improvement ko. i hate myself, I lost you again. Mammiss ko lahat ng pinagsamahan natin. yung Paglalaro, Paguupdate everyday, yung "goodmorning lovelovee, goodnight, sleepwell, sweetdreams, iloveyousomuch lovelove, mwa" at yung pagaargue natin na nagbigay satin ng learnings. Siguro nga lang nasobrahan and minsan nagiging prideful tayong dalawa hanggang dumating sa part na natatakot na tayong mag express ng feelings. I don't hate you lovelove. You are my biggest lesson again. Handa akong mag grow ng mag grow hanggang mahanap mo yung better na ako. 
I just wonder… if we had met at a different point in life, yung nag meet tayo sa punto na kilala na natin yung mga pagkakamali natin, would the ending have been different?\n\nAnyway, I hope you're doing okay, even though we’re not in each other’s lives anymore. i just want you to know that i love you. i put so many efforts just to learn programming, \n\ni miss you love love ko, if di kana talaga babalik and if you're already happy without me, i'm very proud of you. i just want you to know that i am still waiting even you already moved on. Nag-aantay parin ako sayo. pipilitin kong aralin at iprove sayo lahat. Ipprove ko sayo na Waiting is on how i express my love for you. I wrote this letter 3 days. Nagcoding ako. Sana sa pagdating ng narealize natin at natuto na tayo, sana di ka magdawang isip na bumalik sakin. I will repeat it again lovelove, I will never hate you, i hate the situation na naging insecure ako. 
If you had problems, lovelove please wag ka magalinlangan na sabihin sakin lahat. Handa akong makinig sayo. Ayokong sarilihin mo lahat ng pagssuffer mo. I will promise for you na di ko na ulit iinvalidate feelings mo. I will take care of it. Sorry kung napressure kita ng sobra. Sobrang emotional kolang talaga last night na halos di kona kinaya at nasabi ko yun. Wag ka magsorry, it's not your fault, hindi kita sinisisi sa situation na to. Please pwede ka mag open up sakin, iintindihin kita ng sobra sobra. Ayokong sarilihin mo yan lahat, Okay??? Don't Pressure yourself too much on academics, Wag ka magpupuyat ng sobra sobra, Wag mong kalimutan na andito ako lagi para sayo. Kung wala kang matatakbuhan sa lahat, wag ka magalinlangan na tumakbo sa harap ko. I just want you to know na mahal na mahal kita..\n\nI will miss you so much lovelove. It's for the better, kahit sobrang sakit. :(((( `;
   
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;


    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 300);
}
