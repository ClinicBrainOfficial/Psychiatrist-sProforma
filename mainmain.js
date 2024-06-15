//row = '<tr><td> 2 </td><td> <img src="AC.jpg" alt="">Arka Bhattacharya</td><td> 14 </td><td> 17 Dec, 2022 </td><td><p class="status delivered">Delivered</p></td></tr>'
const firebaseConfig = {
    apiKey: "AIzaSyARiREVh3N4tsEeJhqNzMB70R1ZA9IiRtc",
    authDomain: "clinicbrain-b1215.firebaseapp.com",
    databaseURL: "https://clinicbrain-b1215-default-rtdb.firebaseio.com",
    projectId: "clinicbrain-b1215",
    storageBucket: "clinicbrain-b1215.appspot.com",
    messagingSenderId: "142661610441",
    appId: "1:142661610441:web:4572c6354e428a6823d618"
  };
    // Initialize Firebase
    function dd(){
      document.getElementById('loader').click();
      setTimeout(function(){
      document.getElementById('loaderc').click();
      },3500);
    }
    function Warning(correct,msg){
      console.log(correct , msg);
  if(correct == 'success'){
    let toast = document.createElement('div');
  toast.classList.add('toastgreen');
  toast.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>' + msg;
  document.getElementById('toastBox').appendChild(toast);
  setTimeout(function(){
  toast.remove();
  console.log('it worked');
  },6000);
  }else{
    let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>' + msg;
  document.getElementById('toastBox').appendChild(toast);
  setTimeout(function(){
  toast.remove();
  },6000);
  }
  }


    firebase.initializeApp(firebaseConfig);
    const currentUrl = window.location.href;
    console.log(currentUrl);
    const inputs = document.querySelectorAll("input"),
      button = document.querySelector("button");
     var urlsp = [];
    urlsp = currentUrl.split('#');
    console.log(urlsp)
    if(urlsp[1] == "popup1"){
    window.location="main.html";
    }

    function getpopup(){
        document.getElementById('pop').style.left = "50px";
        
        setTimeout(() => {
         document.getElementById('pop').style.left = "-1000px";
          
        }, 3000);
    }
function starttt(){
    const detector = navigator.onLine;
    if(detector == false){
       document.getElementById('errortt').innerHTML = "No Internet Connection !!";
       getpopup();
       Warning('dwdw','No Internet Found')
    }
}
window.setInterval(starttt(),6000);

starttt();
var serial = 0;
function addpatient(){
    if(localStorage.getItem('AlreadyGoing') != 'Yes'){
        localStorage.setItem('AlreadyGoing','Yes');
        
        if(document.getElementById('all_correct').checked){


            
          if (document.getElementById('Adolecent_name').value == "" || document.getElementById('age').value == "" || document.getElementById('sex').value == "" || document.getElementById('date_of_birth').value== "" || document.getElementById('date_month').value== "" || document.getElementById('date_year').value== "" || document.getElementById('Handeddness').value== "" || document.getElementById('tongue').value== "" || document.getElementById('Consanguinity').value == ""){

            alert('Please Fill The Require Data.');
    localStorage.removeItem('AlreadyGoing');
            }else{
              Warning('feff','We are updating the data. Wait a min...')
           get_no();
           setTimeout(function(){
            var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var mmmmmmmm;
    if(confirm('Did this paitent visited you today ?')!=true){
      var ddd = prompt('In Which Day In Number The paitent visited');
      var mmmm = prompt('In Which Month In Number The paitent visited');
      var yy = prompt('In Which Year In Number The paitent visited');
      mmmmmmmm = ddd + '/' + mmmm + '/' + yy;
    }else{
      mmmmmmmm = dd + '/' + mm + '/' + yyyy;
    }
    today = dd + '/' + mm + '/' + yyyy;
    mmm = serial + 1
    getfresh = removeDuplicates(goodserial);
    console.log(getfresh.length + 1)
    console.log(mmm);
    if((getfresh.length + 1) == mmm){
        firebase.database().ref('UserOfCB/').update({
    
        }).catch((error)=>{
            localStorage.removeItem('AlreadyGoing');
            document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
            getpopup();
            alert(error);
          });
       firebase.database().ref('UserOfCB/').push({
        AdolesentName:document.getElementById('Adolecent_name').value,
        AdolesentAge:document.getElementById('age').value,
        updateDate : today,
        SerialNo : mmm,
        vDate : mmmmmmmm,

       }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
       firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').update({
       status:'NotDone'
       }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
       firebase.database().ref('SirialNO/').update({
        serial : mmm
       }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
       firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('PersonalInfo/').update({
        AdolesentName:document.getElementById('Adolecent_name').value,
        AdolesentAge:document.getElementById('age').value,
        Sex:document.getElementById('sex').value,
        DoB_Day:document.getElementById('date_of_birth').value,
        DoB_Month:document.getElementById('date_month').value,
        DoB_Year:document.getElementById('date_year').value,
        Mobile:document.getElementById('mobile').value,
        Handedness:document.getElementById('Handeddness').value,
        Registration:document.getElementById('registration').value,
        MotherTongue:document.getElementById('tongue').value,
        Consanguinity:document.getElementById('Consanguinity').value,
        Email:document.getElementById('email').value,
        PresentAddress:document.getElementById('present_address').value,
        PermanentAddress:document.getElementById('permanent_address').value,
        

      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('SchoolHistory/').update({
        AgeOfAdmission:document.getElementById('Admission_age').value,
        MediumOFInstruction:document.getElementById('M_Instruction').value,
        Standard:document.getElementById('Standard').value,
        FailureInEachClass:document.getElementById('Failure').value,
        SchoolPerformance:document.getElementById('Performance').value,
        BehaviourInSchool:document.getElementById('Behaviour_School').value,
      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('FamilyHistory/').update({
        MentalIllness:document.getElementById('MentalIllness').value,
        Psychosis:document.getElementById('Psychosis').value,
        Psychosomatic:document.getElementById('Psychosomatic').value,
        Neurosis:document.getElementById('Neurosis').value,
        Suicide:document.getElementById('Suicide').value,
        Psychopathic:document.getElementById('Psychopathic').value,
        Retardation:document.getElementById('Retardation').value,
        Epilepsy:document.getElementById('Epilepsy').value,
        DrugAddiction:document.getElementById('Drug').value,
        Enuresisinsibling:document.getElementById('Enuresis').value,
      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('Psyfather/').update({
        Education:document.getElementById('Education_Father').value,
        Occupation:document.getElementById('Occupation_Father').value,
        Personality:document.getElementById('Personality_Father').value,
        Traits:document.getElementById('Traits_Father').value,
      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('Psymother/').update({
        Education:document.getElementById('Education_Mother').value,
        Occupation:document.getElementById('Occupation_Mother').value,
        Personality:document.getElementById('Personality_Mother').value,
        Traits:document.getElementById('Traits_Mother').value,
      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('Psyothers/').update({
        Education:document.getElementById('Education_Others').value,
        Occupation:document.getElementById('Occupation_Others').value,
        Personality:document.getElementById('Personality_Others').value,
        Traits:document.getElementById('Traits_Others').value,
      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('BirthAndInfancy/').update({
        PregnencySize:document.getElementById('Pregnency_Lenght').value,
        IllnessPregnency:document.getElementById('IllnessDuringPregnency').value,
        WhatIlleness:document.getElementById('WhatIllness').value,
        ExposureToDrug:document.getElementById('Drug_Explosure').value,
        MotherAgeWhenChildWBorn:document.getElementById('age_mother').value,
        HospitalDelivery:document.getElementById('homeHospital').value,
      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('HistoryOfLabour/').update({
        DileveryType:document.getElementById('Delivery').value,
        Duration:document.getElementById('Duration').value,
        Cry:document.getElementById('Cry').value,
        Vaccination:document.getElementById('Vaccination').value,
        BirthWeight:document.getElementById('weight_birth').value,
      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('feedingHistory/').update({
        Type:document.getElementById('Feeding_Type').value,
        AgeofWearing:document.getElementById('wearing_age').value,
      
      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('DevelopmentHistory/').update({
        NeckHolding :document.getElementById('Neck_Holding').value,
        Sitting:document.getElementById('sitting').value,
        Crawling:document.getElementById('Crawling').value,
        Walking:document.getElementById('Walking').value,
        Running:document.getElementById('Running').value,
        Cycling:document.getElementById('Cycling').value,
        ObjectReached:document.getElementById('Object_Reached').value,
        TransferOfObject:document.getElementById('Transfer_Object').value,
        PalmarGrasp:document.getElementById('Palmar').value,
        PincerGrasp:document.getElementById('Pincer').value,
        Handwriting:document.getElementById('Handwriting').value,
        Drawing:document.getElementById('Drawing').value,
        Gurgling:document.getElementById('Gurgling').value,
        Babbling:document.getElementById('Babbling').value,
        Monosyllable:document.getElementById('Monosyllable').value,
        MeaningfulWords:document.getElementById('MeanWords').value,
        FluentTalking:document.getElementById('Fluent').value,
        ClarityOfSpeech:document.getElementById('SpeechClarity').value,
        SocialSmile:document.getElementById('SocialSmile').value,
        StrangerAnxity:document.getElementById('StranAnxity').value,
        GroupActivity:document.getElementById('GroupActivity').value,
        BladderControl:document.getElementById('BladderControl').value,
        OldPreOccupation :document.getElementById('OPOccupation').value,
        CircumscribedInterest :document.getElementById('CSInterest').value,
        BowelControl :document.getElementById('BowelControl').value,
        FirstProrperWordSentence :document.getElementById('FPWS').value,
      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('ToiletTraining/').update({
        Bowels:document.getElementById('Bowels').value,
        Bladder:document.getElementById('Bladder').value,
        Punishment:document.getElementById('PAOT').value
      }).catch((error)=>{
        localStorage.removeItem('AlreadyGoing');
        document.getElementById('errortt').innerHTML = "Some Wired Error Occur !";
        getpopup();
        alert(error);
      });
      firebase.database().ref(document.getElementById('Adolecent_name').value+mmm+'/').child('PastHistory/').update({
        CNSDisease:document.getElementById('CNSD').value,
        SystemicDisease :document.getElementById('SysD').value,
        Psychomaticillness:document.getElementById('Psylllness').value,
        Hospitalisation:document.getElementById('Hospitalisation').value,
        Psychiatricillness:document.getElementById('PAOT1').value,
      });


    }else{
      window.location = 'main.html';
    }
           
           },5000);
           document.getElementById('close22').click();
            }
           
        }else{
            localStorage.removeItem('AlreadyGoing');
            alert('Please Confirm that Every Information Are Correct');
        }
    }else{
        document.getElementById('errortt').innerHTML = "Already One In Process !!";
        getpopup();
    }
    localStorage.removeItem('AlreadyGoing');
}
function get_no(){
    var ref = firebase.database().ref('SirialNO/');
    ref.once('value',function(get_data){
        var data = get_data.val();
      serial =  data.serial;
    })
};
function removeDuplicates(arr) {
    return arr.filter((item,
    index) => arr.indexOf(item) === index);
    }
    
var goodserial = [];
function getData() { firebase.database().ref("UserOfCB/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    var firebase_message_id = childKey;
    var message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['AdolesentName'];
AdolesentAge = message_data['AdolesentAge'];
SerialNo = message_data['SerialNo'];
updateDate1 = message_data['updateDate'];
vDate = message_data['vDate'];
goodserial.push(firebase_message_id);
console.log(goodserial);
console.log(removeDuplicates(goodserial));
if(vDate != undefined){
  row = '<tr style="cursor:pointer;" id="'+Name+SerialNo+'" onclick="transfer(this.id)"><td>'+SerialNo+'</td><td> <img src="AC.jpg" alt="">'+Name+'</td><td>'+AdolesentAge+'</td><td>'+vDate+'</td><td>'+updateDate1+'</td><td><p class="status delivered">Updated</p></td></tr>';
  document.getElementById('output').innerHTML += row;
}else{
  row = '<tr style="cursor:pointer;" id="'+Name+SerialNo+'" onclick="transfer(this.id)"><td>'+SerialNo+'</td><td> <img src="AC.jpg" alt="">'+Name+'</td><td>'+AdolesentAge+'</td><td>Not Found</td><td>'+updateDate1+'</td><td><p class="status delivered">Updated</p></td></tr>';
  document.getElementById('output').innerHTML += row;
}


//End code
 } });  }); }
 getData();
 function transfer(get_info){
 localStorage.setItem('get_name2024',get_info);
 
 window.location = "appoint.html";
 }
function fliter1(){

    let filter1 = document.getElementById('searchname').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[1];
        console.log(filter1)
        if(filter1 == ''){
            tr[i].style.display = "";
        }else{
            if (td){
                let textvalue = td.textContent || td.innerHTML;
                
                if(textvalue.toUpperCase().indexOf(filter1) > -1){
                    tr[i].style.display = "";
    
                }else{
                   
                    tr[i].style.display = "none";
                   
                }
    
            }
        }


        
    }
    
}
function fliter2(){

    let filter1 = document.getElementById('sp').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[1];
        console.log(filter1)
        if(filter1 == ''){
            tr[i].style.display = "";
        }else{
            if (td){
                let textvalue = td.textContent || td.innerHTML;
                
                if(textvalue.toUpperCase().indexOf(filter1) > -1){
                    tr[i].style.display = "";
    
                }else{
                   
                    tr[i].style.display = "none";
                   
                }
    
            }
        }


        
    }
}


function removeit(){
    localStorage.removeItem('AlreadyGoing');
}