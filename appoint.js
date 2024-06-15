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



    firebase.initializeApp(firebaseConfig);
    const currentUrl = window.location.href;
console.log(currentUrl);
const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");
 var urlsp = [];
urlsp = currentUrl.split('#');
console.log(urlsp)
if(urlsp[1] == "popup1"){
window.location="appoint.html";
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
                                     
   var  Sex;                                         
   var  DoB_Day;                                         
   var  DoB_Month;                                         
   var  DoB_Year;                                   
   var  Mobile;                                
   var  Handedness;                                    
   var  Registration;                                      
   var  MotherTongue;                                      
   var  Consanguinity;                                       
   var  Email;                               
   var  PresentAddress;                                        
   var  PermanentAddress;     
var       PoorAttenstionSpan;
var  PoorAcadamic;
var          PoorUnderstanding;
var      StubBornBehaviour;
var         EasyIrritability;
var        Impulsivity;
var        Hyperactivy;
var          ForgetsEasily;
var          ChangeInSleep;
var             ChangeInAppetite;
var      Withdrawn;
var    Tearful;
var             LackOfConfidence;
var    Fatigue;
var  LackOfPlayingInterest;
var     Listless;
var      Irritable;
var        Suicidality;
var               StrangerAnxitility;
var               Performance_anxity;
var      StageFear;
var              SomaticComplaints;
var              generalisedAnxity;
var            BlacksOutInExam;
var             Sleepdisturbance;
var OtherIssue;
var  PoorAttenstionSpan1;
var  PoorAcadamic1;
var      PoorUnderstanding1;
var  StubBornBehaviour1;
var     EasyIrritability1;
var    Impulsivity1;
var    Hyperactivy1;
var      ForgetsEasily1;
var      ChangeInSleep1;
var         ChangeInAppetite1;
var  Withdrawn1;
var  Tearful1;
var         LackOfConfidence1;
var  Fatigue1;
var              LackOfPlayingInterest1;
var  Listless1;
var  Irritable1;
var    Suicidality1;
var           StrangerAnxitility1;
var           Performance_anxity1;
var  StageFear1;
var          SomaticComplaints1;
var          generalisedAnxity1;
var        BlacksOutInExam1;
var         Sleepdisturbance1;
var  OtherIssue1;
var  AgeOfAdmission     
var  MediumOFInstruction
var  Standard    
var  FailureInEachClass     
var  SchoolPerformance      
var  BehaviourInSchool 
var  MentalIllness      
var  Psychosis          
var  Psychosomatic      
var  Neurosis               
var  Suicide                
var  Psychopathic           
var  Retardation            
var  Epilepsy               
var  DrugAddiction          
var  Enuresisinsibling       
var  Education   
var  Occupation  
var  Personality 
var  Traits 
var  Education1  
var  Occupation1 
var  Personality1 
var  Traits1          
var  Education2   
var  Occupation2  
var  Personality2 
var  Traits2          
var  PregnencySize           
var  IllnessPregnency        
var  WhatIlleness            
var  ExposureToDrug          
var  MotherAgeWhenChildWBorn 
var  HospitalDelivery     
var DileveryType
var Duration    
var Cry         
var Vaccination     
var BirthWeight 
var Type    
var AgeofWearing
var NeckHolding
var Sitting
var Crawling
var Walking
var Running
var Cycling
var ObjectReached
var TransferOfObject
var PalmarGrasp
var PincerGrasp
var Handwriting
var Drawing
var Gurgling
var Babbling
var Monosyllable
var MeaningfulWords
var FluentTalking
var ClarityOfSpeech
var SocialSmile
var StrangerAnxity
var GroupActivity
var BladderControl
var OldPreOccupation
var CircumscribedInterest
var BowelControl
var FirstProrperWordSentence       
var Bowels    
var Bladder   
var Punishment
var ActivityLevel   
var Rhythmicity     
var Distractibility     
var Approch             
var Adaptibility        
var Attention           
var Intensity           
var Threshold           
var Mood                
var Other               
var PunishmentNT
var RidculeNT
var PrecipitatingNT
var RelievingNT
var WettingNT
var SuckingNT
var BitingNT
var SleepWalkingcNT
var NightMaresNT
var MasturbationNT
var PicaNT
var BruxismNT
var PyromaniaNT
var FearsNT
var PhobiasNT
var DepressionNT
var ChangeNT
var ChangeinAppetiteNT
var WithdrawnNT
var TearfulNT
var LackOfConfidenceNT
var FatigueNT
var LackOfInterestPlayNT
var ListlessNT
var SuicidalityNT
var OtherNT
var TreatmentNT
var DetailsNT
var AnxityNTMain
var StrangerNT
var StrangerDetailsNT
var PerformanceNT
var PerformanceDetailsNT
var StageNT
var StageDetailsNT
var PhobiasNT
var PhobiasDetailsNT
var PanicNT
var PanicDetailsNT
var ObsessiveNT
var ObsessiveDetailsNT
var ComplaintsNT
var ComplaintsDetailsNT
var GeneralisedNT
var GeneralisedDetailsNT
var BlacksNT
var BlacksDetailsNT
var DistrubanceNT
var DistrubanceDetailsNT
var AppetiteNT
var AppetiteDetailsNT
var TraitsNTThe
var temperNT
var companyNT
var BlamesNT
var resentfulNT
var arguesNT
var DeliberatelyNT
var AnnoyedNT
var vindictiveNT
var DdisordersNTTheMMainPart
var AggressionNT
var BulliesNT
var ThreatenNT
var FightsNT
var CrueltyNT
var DestructionNT
var ViolationNT               
var OtheraNT
var CNSDisease        
var SystemicDisease   
var Psychomaticillness
var Hospitalisation    
var Psychiatricillness
var Hyperactivity
var Active
var Lethargic
var Overtalkactiver
var Silent
var Obedient
var Disobedient
var DisobedientOther
var DisobedientOtherDetails
var Normal
var Good
var Poor
var Average
var AverageOther
var AaverageOtherDetails
var Willingnesstogo
var notwillingWhatIs
var AcceptanceNT
var OtherOfWhatIs
var childabsentisism
var FrequencyOfabsentisism
var theirattitude
var theirattitudeOther
var consciousnessCE
var operativeCE
var OrientationCE
var TimeCE
var PlaceCE
var PersonCE
var BuiltCE
var NutritionCE
var BMICE
var AnaemiaCE
var CyanosisCE
var JaurdiceCE
var LymphCE
var ClubbingCE
var OedemaCE
var PulseCE
var RespirationCE
var RateCE
var RhythmCE
var TypeCE
var DepthCE
var TemperatureCE
var PressureCE
var DeforminityCE
var DetailsCE
var CardiovascularCE
var S1CE
var S2CE
var MurmursCE
var RespiratoryCE
var AdventitiousCE
var NervousCE
var ToneCE
var PowerCE
var ReflexesCE
var CerebellarCE
var InvoluntaryCE
var CoordinateCE
var NeirologicalCE
var diadokokinesiaCE
var balancingCE
var ApraxiaCE
var GraphaestesiaCE
var coordinationCE
var VisionCE
var HearingCE
var AppearanceCE
var TidyCE
var TidyDetailsCE
var UntidyCE
var UntidyDetailsCE
var InappropraitelyCE
var InappropraitelyDetailsCE
var behaviourCE
var behaiviordetailsCE
var ExaminerCE
var AffectiveCE
var AppropraitnessCE
var SpeechCE
var SpeechDetailsCE
var AttentionCE
var AttentionDetailsCE
var MoodCE
var ProductivityCE
var RelevantCE
var CoherantCE
var ContentCE
var PreoccupationCE
var PreoccupationDetailsCE
var DelusionCE
var DelusionDetailsCE
var IdeasCE
var IdeasvDetailsCE
var OtherDCE
var DetailsOtherCE
var MotorCoordinateCE
var MotorInvoluuntaryCE
var MotorActivityCE
var OrientationTimeCE
var OrientationPlaceCE
var OrientationPersonCE
var OrientationMemoryCE
var OrientationImmediateCE
var OrientationRecentCE
var OrientationPostCE
var OrientationRemoteCE
var GeneralCE
var SpecificCE
var AbstractCE
var AbstractDetailsCE
var JudgementTestCE
var JudgementSocialCE
var InsightCE

if(localStorage.getItem('verify') != "yes"){
    window.location = 'index.html';
}
if(localStorage.getItem('get_name2024') == null){
    window.location = 'index.html';
}
if(localStorage.getItem('get_name2024') == undefined){
    window.location = 'index.html';
}
function getpopup(){
    document.getElementById('pop').style.left = "100px";
    
    setTimeout(() => {
     document.getElementById('pop').style.left = "-1000px";
      
    }, 3000);
}
function starttt(){
    const detector = navigator.onLine;
    if(detector == false){
       document.getElementById('errortt').innerHTML = "No Internet Connection !!";
       getpopup();
    }
}
window.setInterval(starttt(),3000);

starttt();
var  sno;
var  name12 = localStorage.getItem('get_name2024');
var  N =  name12.match(/\d+/g);
var  Name = name12.split(N)[0]

console.log(Name);

function AddAp(){

if(confirm('Do You Really Want To Add A Apointment Today !')==true){
    
    var  today = new Date();
    var  dd = String(today.getDate()).padStart(2, '0');
    var  mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var  yyyy = today.getFullYear();
    
    today = dd + '/' + mm + '/' + yyyy;
    if(localStorage.getItem('AlreadyGoing') != 'Yes'){
        localStorage.setItem('AlreadyGoing','Yes');
        document.getElementById('loader').click();
        var da = today.split('/');
        var get_n;

        var ref = firebase.database().ref(name12 + '/').child('AlreadyUse/'+(da[0]+da[1]+da[2])+'/');
        ref.once('value',function(get_data){
        var data = get_data.val();
        get_n = data.get;
        });
        get_no();
        
        setTimeout(function(){
            if(get_n == undefined && get_n != 'Yes'){
                mmm = sno + 1;
                firebase.database().ref(name12 + '/').child('Appointment/').update({
            
                });
                firebase.database().ref(name12 + '/').child('AlreadyUse/'+da[0]+da[1]+da[2]+'/').update({
                get : 'Yes'
                });
                firebase.database().ref(name12 + '/').child('Appointment/').push({
                Name : Name,
                Sno : mmm,
                date : today,
                status : 'no',
    
                });
                firebase.database().ref(name12 + '/').child('SerialNo/').update({
                    serial : mmm,
                   });
    
                   window.location = "appoint.html";
                   localStorage.removeItem('AlreadyGoing');
            }else if(get_n != undefined){
                document.getElementById('loaderc').click();
                document.getElementById('errortt').innerHTML = 'YOU HAVE ALREADY REGISTER AN APPOINTMENT IN '+da
                getpopup();
                localStorage.removeItem('AlreadyGoing')
            }
          
        },6000);
    
    }else{
        console.log('Working');
        document.getElementById('errortt').innerHTML = "Already One In Process !!";
        getpopup();
    }
}else if(confirm('Do you want to add it with older date')==true){

    var  dd = prompt('In Which Day In Number The paitent visited');
    var  mm = prompt('In Which Month In Number The paitent visited');
    var  yyyy =prompt('In Which Year In Number The paitent visited');
    
    today = dd + '/' + mm + '/' + yyyy;
    if(localStorage.getItem('AlreadyGoing') != 'Yes'){
        localStorage.setItem('AlreadyGoing','Yes');
        document.getElementById('loader').click();
        var da = today.split('/');
        var get_n;

        var ref = firebase.database().ref(name12 + '/').child('AlreadyUse/'+(da[0]+da[1]+da[2])+'/');
        ref.once('value',function(get_data){
        var data = get_data.val();
        get_n = data.get;
        });
        get_no();
        
        setTimeout(function(){
            if(get_n == undefined && get_n != 'Yes'){
                mmm = sno + 1;
                firebase.database().ref(name12 + '/').child('Appointment/').update({
            
                });
                firebase.database().ref(name12 + '/').child('AlreadyUse/'+da[0]+da[1]+da[2]+'/').update({
                get : 'Yes'
                });
                firebase.database().ref(name12 + '/').child('Appointment/').push({
                Name : Name,
                Sno : mmm,
                date : today,
                status : 'no',
    
                });
                firebase.database().ref(name12 + '/').child('SerialNo/').update({
                    serial : mmm,
                   });
    
                   window.location = "appoint.html";
                   localStorage.removeItem('AlreadyGoing');
            }else if(get_n != undefined){
                document.getElementById('loaderc').click();
                document.getElementById('errortt').innerHTML = 'YOU HAVE ALREADY REGISTER AN APPOINTMENT IN '+da
                getpopup();
                localStorage.removeItem('AlreadyGoing')
            }
          
        },6000);
    
    }else{
        console.log('Working');
        document.getElementById('errortt').innerHTML = "Already One In Process !!";
        getpopup();
    }
}else{
    return false
}
 
 
   
    
}

function get_no(){
    var  ref = firebase.database().ref(name12 + '/').child('SerialNo/');
    ref.once('value',function(get_data){
        var  data = get_data.val();
      sno =  data.serial;
      
    });
    setTimeout(function(){
        if (sno == null){
            firebase.database().ref(name12 + '/').child('SerialNo/').update({
             serial : 0
            });
            sno = 0;
             }else if(sno == undefined){
                 firebase.database().ref(name12 + '/').child('SerialNo/').update({
                     serial : 0
                    });
                    sno = 0;
             }else if(sno == ''){
                 firebase.database().ref(name12 + '/').child('SerialNo/').update({
                     serial : 0
                    });
                    sno = 0;
             }
            
    },3000);
 
};
var objectid = [];

function removeDuplicates(arr) {
return arr.filter((item,
index) => arr.indexOf(item) === index);
}

setTimeout(function(){
console.log(objectid);
},5000)
 function getData() { firebase.database().ref(name12).child('Appointment').on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    var  firebase_message_id = childKey;
    var  message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['Name'];
SerialNo = message_data['Sno'];
updateDate1 = message_data['date'];
status1 = message_data['status'];
Previous = message_data['Pre'];
var tosno = Previous + 1
objectid.push(firebase_message_id+'@'+name12+'@'+SerialNo+'@'+status1);


if(status1 != "no"){
    row = '<tr oncontextmenu="deletebig(this.id)"   onclick="fillform(this.id)" id="'+firebase_message_id+'@'+name12+'@'+updateDate1+"@"+status1+'@'+SerialNo+'" style="cursor:pointer;"><td>'+SerialNo+'</td><td> <img src="AC.jpg" alt="">'+Name+'</td><td>'+updateDate1+'</td><td><p class="status delivered" style="background:green;color:white;" id="'+firebase_message_id+'">Opened</p></td></tr>';
    document.getElementById('output').innerHTML += row;


}else{
  
    row = '<tr oncontextmenu="deletebig(this.id)"  onclick="fillform(this.id)" id="'+firebase_message_id+'@'+name12+'@'+updateDate1+'@'+status1+'@'+SerialNo+'" style="cursor:pointer;"><td>'+SerialNo+'</td><td> <img src="AC.jpg" alt="">'+Name+'</td><td>'+updateDate1+'</td><td><p class="status delivered" style="background:red;color:white;" id="'+firebase_message_id+'">Not Opened</p></td></tr>';
    document.getElementById('output').innerHTML += row;
}
console.log(updateDate1)
//End code
 } });  }); }
 getData();
 function deletebig(getdata){
var hehehehe = [];
hehehehe = getdata.split('@');
get = hehehehe[2].split('/');
var hehehehed = get[0]+get[1]+get[2];
console.log(hehehehed)
 if(confirm('Are You Sure You Want To Delete The Appointment '+hehehehe[4])==true){
    if(hehehehe[3] == 'yes'){
        document.getElementById('loader').click();
        firebase.database().ref(name12+'/').child('Appointment/'+hehehehe[0]).remove();
        firebase.database().ref(name12 +'/').child('AlreadyUse/'+hehehehed).remove();
        window.location = 'appoint.html';
    }else{
        document.getElementById('loader').click();
        firebase.database().ref(name12+'/').child('Appointment/'+hehehehe[0]).remove();
        firebase.database().ref(name12 +'/').child('AlreadyUse/'+hehehehed).remove();
        window.location = 'appoint.html';
  
    }

 }
 }
setInterval(function(){
if (isonprocess == 'true'){
return false
}else{
    checkserial();
}

},6000)
function checkserial(){
    filtered = removeDuplicates(objectid);
    getthenum = [];
    getsplit = [];
    getserialss=[];
    var Namedd;
    for(var j = 0;j<filtered.length;j++){
            console.log('CheckTheDude.')
            serialbaby = 0;
            getsplit.length = 0;
            getsplit = filtered[j].split('@');
            console.log(j);
            var ref = firebase.database().ref(name12+'/').child('Appointment/'+getsplit[0]);
            ref.once('value',function(get_data){
            var data = get_data.val();
            serialbaby = data.Sno;
            Namedd = data.Name; 
            });
           getserialss.push(serialbaby);
           console.log(getserialss);
         if(serialbaby == (j+1)){
            console.log('True');
         }else if(Namedd != undefined){
            improvetime(filtered[j],j+1);
            return false;
         }else{
            document.getElementById('loaderc').click();
         }
    }
}
var isonprocess = 'false';
function improvetime(get,realserial){
try{

    isonprocess = 'true';
    document.getElementById('loader').click();
getss = [];
getss = get.split('@');
var SerialNo = getss[2];
var status1= getss[3];
var tosno = realserial;
if (status1 == "yes"){

  



                firebase.database().ref(name12 + '/').child('Appointment/'+getss[0]+'/').update({
                    Sno:tosno,
                    status:status1
                    });
                    firebase.database().ref(name12 + '/').child('SerialNo/').update({
                        serial:tosno,
                        });
            

            


           // firebase.database().ref(name12 + '/' + Previous + '/').remove();
           // firebase.database().ref(name12 + '/').child('Appointment/'+firebase_message_id+'/').update({
           //     Pre:tosno-1,
           //     Sno:tosno,
            //    status:'yes'
            //    });
             //   firebase.database().ref(name12 + '/').child('SerialNo/').update({
             //       serial : tosno,
              //     });
             setTimeout(function(){
                isonprocess = 'false';
                 document.getElementById('loaderc').click();
                 window.location  = 'appoint.html'
             },5000);




}else if(status1 == 'no'){
    firebase.database().ref(name12 + '/').child('SerialNo/').update({
        serial:tosno,
        })
    
    firebase.database().ref(name12 + '/').child('Appointment/'+getss[0]+'/').update({
        Sno:tosno,
        status:status1
        });
    setTimeout(function(){
        isonprocess = 'false';
         document.getElementById('loaderc').click();
         window.location = 'appoint.html'
     },5000);

}

}catch(e){
    console.log('Error Occured ',e);

}


}

function fillform(get_bla){
localStorage.setItem('yourinfo',get_bla);
window.location = 'editmain.html';
}

 function fliter1(){

    let filter1 = document.getElementById('searchname').value;
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    for(var  i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[2];
        console.log(filter1)
        if(filter1 == ''){
            tr[i].style.display = "";
        }else{
            if (td){
                let textvalue = td.textContent || td.innerHTML;
                console.log(textvalue);
                if(textvalue.indexOf(filter1) > -1){
                    tr[i].style.display = "";
    
                }else{
                   
                    tr[i].style.display = "none";
                   
                }
    
            }
        }


        
    }
    
}
function fliter2(){

    let filter1 = document.getElementById('sp').value;
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    for(var  i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[2];
        console.log(filter1)
        if(filter1 == ''){
            tr[i].style.display = "";
        }else{
            if (td){
                let textvalue = td.textContent || td.innerHTML;
                console.log(textvalue);
                if(textvalue.indexOf(filter1) > -1){
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

