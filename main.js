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
  window.location="index.html";
  }
  if(localStorage.getItem('verify') != "yes"){
    window.location = 'index.html';
}
// Personal details
var name1 = document.getElementById('Adolecent_name')
var age = document.getElementById('age')
var sex = document.getElementById('sex')
var BOD = document.getElementById('date_of_birth')
var BOM = document.getElementById('date_month')
var BOY = document.getElementById('date_year')
var moblie = document.getElementById('mobile')
var registration = document.getElementById('registration')
var Handedness = document.getElementById('Handeddness')
var Mother_Tongue = document.getElementById('tongue')
var Consanguinity = document.getElementById('Consanguinity')
var Email = document.getElementById('email')
var Present_Address = document.getElementById('present_address')
var Permanent_Address = document.getElementById('permanent_address')
//Parents Complaints
var PoorAttenstionSpan = document.getElementById('attention_P')
var PoorAcadamic = document.getElementById('Acadamic_P')
var PoorUnderstanding = document.getElementById('understanding_P')
var StubBornBehaviour = document.getElementById('Behaviour_P')
var EasyIrritability = document.getElementById('Irritability_P')
var Impulsivity = document.getElementById('Impulsivity_P')
var Hyperactive = document.getElementById('Hyperactivity_P')
var ForgetsEasily = document.getElementById('ForgetsEasily_P')
var ChangeInSleep = document.getElementById('ChangeInSleep_P')
var ChangeInAppetite_P = document.getElementById('ChangeInAppetite_P')
var Withdrawn = document.getElementById('Withdrawn_P')
var Tearful = document.getElementById('Tearful_P')
var LackOfConfidence = document.getElementById('LackOfConfidence_P')
var Fatigue = document.getElementById('Fatigue_P')
var LackOfPlayingInterest = document.getElementById('LackOfPlayingInterest_P')
var Listless = document.getElementById('Listless_P')
var Irritable = document.getElementById('Irritable_P')
var Suicidality = document.getElementById('Suicidality_P')
var StrangerAnxitility =document.getElementById('StrangerAnxitility')
var Performance_Anxity = document.getElementById('Performance_anxity_P')
var StageFear = document.getElementById('StageFear_P')
var SomaticComplaints =document.getElementById('SomaticComplaints_P')
var generalisedAnxity =document.getElementById('generalisedAnxity_P')
var BlacksOutInExam = document.getElementById('BlacksOutInExam_P')
var Sleepdisturbance = document.getElementById('Sleepdisturbance_P')
var OtherIssue = document.getElementById('OtherIssue_P')
// Teacher Complaints
var PoorAttenstionSpanT = document.getElementById('attention_T')
var PoorAcadamicT= document.getElementById('Acadamic_T')
var PoorUnderstandingT = document.getElementById('understanding_T')
var StubBornBehaviourT = document.getElementById('Behaviour_T')
var EasyIrritabilityT = document.getElementById('Irritability_T')
var ImpulsivityT = document.getElementById('Impulsivity_T')
var HyperactiveT = document.getElementById('Hyperactivity_T')
var ForgetsEasilyT = document.getElementById('ForgetsEasily_T')
var ChangeInSleepT= document.getElementById('ChangeInSleep_T')
var ChangeInAppetite_T = document.getElementById('ChangeInAppetite_T')
var WithdrawnT = document.getElementById('Withdrawn_T')
var TearfulT = document.getElementById('Tearful_T')
var LackOfConfidenceT = document.getElementById('LackOfConfidence_T')
var FatigueT = document.getElementById('Fatigue_T')
var LackOfPlayingInterestT = document.getElementById('LackOfPlayingInterest_T')
var ListlessT = document.getElementById('Listless_T')
var IrritableT = document.getElementById('Irritable_T')
var SuicidalityT = document.getElementById('Suicidality_T')
var StrangerAnxitilityT =document.getElementById('StrangerAnxitility_T')
var Performance_AnxityT = document.getElementById('Performance_anxity_T')
var StageFearT = document.getElementById('StageFear_T')
var SomaticComplaintsT =document.getElementById('SomaticComplaints_T')
var generalisedAnxityT =document.getElementById('generalisedAnxity_T')
var BlacksOutInExamT = document.getElementById('BlacksOutInExam_T')
var SleepdisturbanceT = document.getElementById('Sleepdisturbance_T')
var OtherIssueT = document.getElementById('OtherIssue_T')

//SCHOOL HISTORY

var AgeOfAdmissionS = document.getElementById('Admission_age')
var MediumOFInstructioS=document.getElementById('M_Instruction')
var StandardS = document.getElementById('Standard')
var FaliureInEachClassS = document.getElementById('Faliure')
var School_PeformanceS =document.getElementById('Performance')
var BehaviorInSchoolS = document.getElementById('Behaviour_School')

//FAMILY  HISTORY

var MentalIllnessF = document.getElementById('MentalIllness')
var PsychosisF=document.getElementById('Psychosis')
var PsychosomaticF=document.getElementById('Psychosomatic')
var NeurosisF=document.getElementById('Neurosis')
var SuicideF=document.getElementById('Suicide')
var PsychopathicF=document.getElementById('Psychopathic')
var RetardationF=document.getElementById('Retardation')
var EpilepsyF=document.getElementById('Epilepsy')
var DrugAddictionF=document.getElementById('Drug')
var EnuresisinsiblingF  =document.getElementById('Enuresis')

// Psychosocial History Father

var EducationPHF= document.getElementById('Education_Father')
var OccupationPHF=document.getElementById('Occupation_Father')
var PersonalityPHF=document.getElementById('Personality_Father')
var TraitsPHF=document.getElementById('Traits_Father')

// Psychosocial History Mother

var EducationPHM= document.getElementById('Education_Mother')
var OccupationPHM=document.getElementById('Occupation_Mother')
var PersonalityPHM=document.getElementById('Personality_Mother')
var TraitsPHM=document.getElementById('Traits_Mother')

// Psychosocial History Others

var EducationPHO= document.getElementById('Education_Others')
var OccupationPHO=document.getElementById('Occupation_Others')
var PersonalityPHO=document.getElementById('Personality_Others')
var TraitsPHO=document.getElementById('Traits_Othe')

//Birth  And Infancy

var PregnencySizeBI=document.getElementById('Pregnency_Lenght')
var IllnessPregnencyBI=document.getElementById('IllnessDuringPregnency')
var WhatIllenessBI=document.getElementById('WhatIllness')
var ExposureToDrugBI=document.getElementById('Drug_Explosure')
var MotherAgeWhenChildWBornBI=document.getElementById('age_mother')
var HospitalDeliveryBI=document.getElementById('homeHospital')

//HISTORY OF  LABOUR

var DileveryTypeHOL=document.getElementById('Delivery')
var DurationHOL=document.getElementById('Duration')
var CryHOL=document.getElementById('Cry')
var VaccinationHOL =document.getElementById('Vaccination')
var BirthWeightinHOL=document.getElementById('weight_birth')

//History Of Feeding
var TypeHOF=document.getElementById('Feeding_Type')
var AgeofWearing=document.getElementById('wearing_age')

//Developmen History
var NeckHolding=document.getElementById('Neck_Holding')
var Sitting=document.getElementById('sitting')
var Crawling=document.getElementById('Crawling')
var Walking=document.getElementById('Walking')
var Running=document.getElementById('Running')
var Cycling=document.getElementById('Cycling')
var ObjectReached=document.getElementById('Object_Reached')
var TransferOfObject=document.getElementById('Transfer_Object')
var PalmarGrasp=document.getElementById('Palmar')
var PincerGrasp=document.getElementById('Pincer')
var Handwriting=document.getElementById('Handwriting')
var Drawing=document.getElementById('Drawing')
var Gurgling=document.getElementById('Gurgling')
var Babbling=document.getElementById('Babbling')
var Monosyllable=document.getElementById('Monosyllable')
var  MeaningfulWords=document.getElementById('MeanWords')
var Fluent=document.getElementById('Fluent')
var ClarityOSpeec=document.getElementById('SpeechClarity')
var  Socialsmil=document.getElementById('SocialSmile')
var StrangerAnxity=document.getElementById('StranAnxity')
var GroupActivity=document.getElementById('GroupActivity')
var BladderControl=document.getElementById('BladderControl')
var OldPrOccupation=document.getElementById('OPOccupation')
var CircumscribedInterest=document.getElementById('CSInterest')
var BowelControl=document.getElementById('BowelControl')
var FirstProrperWordSentence =document.getElementById('FPWS')
//Toilet Traning
var Bowels=document.getElementById('Bowels')
var Bladder=document.getElementById('Bladder')
var Punishment=document.getElementById('PAOT')
//Temperamental Traits
var ActivityLevel=document.getElementById('ActivityLevel')
var Rhythmicity=document.getElementById('Rhythmicity')
var Distractibility=document.getElementById('Distractibility')
var Withdrawl=document.getElementById('AW')
var Adaptibility=document.getElementById('Adaptibility')
var Attention=document.getElementById('AttentionSpan')
var Intensity=document.getElementById('IOR')
var Threshold=document.getElementById('TOFREsponsive')
var Quality=document.getElementById('QOM')
var Other=document.getElementById('OTAIFANY')
//Neurotc Traits
var AcceptanceNT=document.getElementById('Acceptance')
var PunishmentNT=document.getElementById('Punishment')
var RidculeNT=document.getElementById('Ridcule')
var PrecipitatingNT=document.getElementById('Precipitating')
var RelievingNT=document.getElementById('Relieving_Factor')
var WettingNT=document.getElementById('Bed_Wetting')
var SuckingNT=document.getElementById('thumbSucking')
var BitingNT=document.getElementById('NailBitting')
var SleepWalkingcNT=document.getElementById('SleepWalking')
var NightMaresNT=document.getElementById('NightMare')
var MasturbationNT=document.getElementById('Masturbation')
var PicaNT=document.getElementById('Pica')
var BruxismNT=document.getElementById('Bruxism')
var PyromaniaNT=document.getElementById('Pyromania')
var FearsNT=document.getElementById('fears')
var PhobiasNT=document.getElementById('phobias')
var DepressionNT=document.getElementById('hs')// The main part
var ChangeNT=document.getElementById('CISLEEP')//
var ChangeinAppetiteNT=document.getElementById('CISPPEte')//
var WithdrawnNT=document.getElementById('withdrawnnn')//
var TearfulNT=document.getElementById('Tearful')//
var LackOfConfidenceNT=document.getElementById('LOC')//
var FatigueNT=document.getElementById('Fatigue')//
var LackOfInterestPlayNT=document.getElementById('LoIiP')//
var ListlessNT=document.getElementById('Listlessss')//
var SuicidalityNT=document.getElementById('Suicidality_Pfgf')//
var OtherNT=document.getElementById('Otherhddepression')//
var TreatmentNT=document.getElementById('treatRecivied')// SubPart
var DetailsNT=document.getElementById('OtherTd')////
var AnxityNT=document.getElementById('hsAnxity')//Main
var StrangerNT=document.getElementById('StrangerAnxity')// //
var StrangerDetailsNT=document.getElementById('StrangerDetials')////
var PerformanceNT=document.getElementById('PerformaceA')// //
var PerformanceDetailsNT=document.getElementById('PerformanceDetials')////
var StageNT=document.getElementById('StageA')// //
var StageDetailsNT=document.getElementById('StageDetials')////
var PhobiasNT=document.getElementById('PhobiasA')// //
var PhobiasDetailsNT=document.getElementById('PhobiasDetials')////
var PanicNT=document.getElementById('PanicA')// //
var PanicDetailsNT=document.getElementById('PanicDetails')////
var ObsessiveNT=document.getElementById('OCA')// //
var ObsessiveDetailsNT=document.getElementById('OCDetials')////
var ComplaintsNT = document.getElementById('SomaticA')// //
var ComplaintsDetailsNT=document.getElementById('SomaticDetials')
var GeneralisedNT=document.getElementById('GeneralisedA')
var GeneralisedDetailsNT=document.getElementById('GeneralisedDetials')
var BlacksNT=document.getElementById('BlackA')
var BlacksDetailsNT=document.getElementById('BlacksoutInExamDetials')
var DistrubanceNT=document.getElementById('SleepA')
var DistrubanceDetailsNT=document.getElementById('SleepDetials')
var AppetiteNT=document.getElementById('AppetiteA')
var AppetiteDetailsNT=document.getElementById('AppetiteDetials')
var TraitsNT=document.getElementById('hsTraits')//The Main  Part
var temperNT=document.getElementById('losttemper')//
var companyNT=document.getElementById('RTC')//
var BlamesNT=document.getElementById('blamesother')//
var resentfulNT=document.getElementById('AngryRecentfull')//
var arguesNT=document.getElementById('Otherargues')//
var DeliberatelyNT=document.getElementById('annoys')//
var AnnoyedNT=document.getElementById('TEA')//
var vindictiveNT=document.getElementById('Spitefull')//
var DdisordersNT=document.getElementById('Disorderf')//TheMMainPart
var AggressionNT=document.getElementById('Aggerssion')//
var BulliesNT=document.getElementById('Bullies')//
var ThreatenNT=document.getElementById('Threaten')//
var FightsNT=document.getElementById('Fights')//
var CrueltyNT=document.getElementById('Cruelty')//
var DestructionNT=document.getElementById('DIP')//
var ViolationNT=document.getElementById('SVAR')//
var OtherNT=document.getElementById('Otia')//

// Past history
var DiseasePHPH=document.getElementById('CNSD')
var SystemicPHPH=document.getElementById('SysD')
var PsychomaticPHPH=document.getElementById('Psylllness')
var HospitalisationPHPH=document.getElementById('Hospitalisation')
var PsychiatricPHPH=document.getElementById('PAOT')

// Behaviour
var HyperactivityB = document.getElementById('HyperActivity')
var ActiveB = document.getElementById('ActiveBehavior')
var LethargicB = document.getElementById('Lethargic')
var OvertalkactiverB = document.getElementById('Overtalkactiver')
var SilentB = document.getElementById('Silent')
var ObedientB = document.getElementById('Obesient')
var DisobedientB = document.getElementById('Disobedient')
var OtherB = document.getElementById('OtherBehaviour')//Main
var ODetailsB = document.getElementById('OtherBehaviotAnswer')
var NormalB = document.getElementById('NormalSleep')
var GoodB = document.getElementById('GS')
var PoorB = document.getElementById('PS')
var AverageB = document.getElementById('AS')
var OtherSleepB = document.getElementById('OtherSleep')
var DetailsSleepB = document.getElementById('OtherSleepAnswer')
var WillingnessB = document.getElementById('WillingnessSchool')
var doneB = document.getElementById('INWWID')
var WhatB = document.getElementById('OtherNWAnswer')
var absentisismB = document.getElementById('ParentsAwareAbsent')
var weekB = document.getElementById('OtherSleepAnswer')
var AttitdeTheirB = document.getElementById('AttitdeTheir')//Main
var OtherAttitudeB = document.getElementById('OtherAttitudeSchool')////
//ClinicalExamination
var consciousnessCE = document.getElementById('LOS')
var operativeCE = document.getElementById('operativeCLINICAL')
var OrientationCE = document.getElementById('OrientationClinical')//
var TimeCE = document.getElementById('TimeOrientation')////
var PlaceCE = document.getElementById('PlaceOrientation')////
var PersonCE = document.getElementById('PersonOrientation')////
var BuiltCE = document.getElementById('BuiltClinical')
var NutritionCE = document.getElementById('NutritionClinical')
var BMICE = document.getElementById('BMIClinical')
var AnaemiaCE = document.getElementById('AnaemiaClinical')
var CyanosisCE = document.getElementById('CyanosisClinical')
var JaurdiceCE = document.getElementById('JaurdiceClinical')
var LymphCE = document.getElementById('LymphClinical')
var ClubbingCE = document.getElementById('ClubbingClinical')
var OedemaCE = document.getElementById('OedemaClinical')
var PulseCE = document.getElementById('PulseClinical')
var RespirationCE = document.getElementById('RespirationClinical')
var RateCE = document.getElementById('RateClinical')
var RhythmCE = document.getElementById('RhythmClinical')
var TypeCE = document.getElementById('TypeClinical')
var DepthCE = document.getElementById('depthClinical')
var TemperatureCE = document.getElementById('TemperatureClinical')
var PressureCE = document.getElementById('PressureClinical')
var DeforminityCE = document.getElementById('AODClinical')
var DetailsCE = document.getElementById('ODIAClinical')
var CardiovascularCE = document.getElementById('SysCardiovascular')
var S1CE = document.getElementById('SysS1')
var S2CE = document.getElementById('SysS2')
var MurmursCE = document.getElementById('SysMurmurs')
var RespiratoryCE = document.getElementById('SysRSAE')
var AdventitiousCE = document.getElementById('SysAS')
var NervousCE = document.getElementById('NervousSys')//
var ToneCE = document.getElementById('ToneNev')////
var PowerCE = document.getElementById('PowerNev')////
var ReflexesCE = document.getElementById('ReflexesNev')////
var CerebellarCE = document.getElementById('CerebellarNev')////
var InvoluntaryCE = document.getElementById('InvvvoluntaryNev')////
var CoordinateCE = document.getElementById('CoordinateNev')///
var NeirologicalCE = document.getElementById('SNNev')////
var diadokokinesiaCE = document.getElementById('DdNev')///
var balancingCE = document.getElementById('PoorNev')////
var ApraxiaCE = document.getElementById('ApraNev')////
var GraphaestesiaCE = document.getElementById('GraphaestesiaNev')////
var coordinationCE = document.getElementById('LRcoorinationNev')////
var VisionCE = document.getElementById('VisionNev')////
var HearingCE = document.getElementById('HearingNev')///
var AppearanceCE = document.getElementById('AppearancePsy')//
var TidyCE = document.getElementById('TidyAB')// //
var TidyDetailsCE = document.getElementById('DTidyAB')////////
var UntidyCE = document.getElementById('UntidyAB')// //
var UntidyDetailsCE = document.getElementById('DUntidyAB')////////
var InappropraitelyCE = document.getElementById('idAB')//
var InappropraitelyDetailsCE = document.getElementById('DidAB')////////
var behaviourCE = document.getElementById('BAOAB')//
var behaiviordetailsCE = document.getElementById('DBAOAB')////////
var ExaminerCE = document.getElementById('ReactiontoE')
var AffectiveCE = document.getElementById('AffectiveE')
var AppropraitnessCE = document.getElementById('AppropraitnessPsy')
var SpeechCE = document.getElementById('SpeechPsy')//
var SpeechDetailsCE = document.getElementById('SODPsy')////
var AttentionCE = document.getElementById('AttentionPsy')//
var AttentionDetailsCE = document.getElementById('SAttentionPsy')////
var MoodCE = document.getElementById('moodPsy')
var ProductivityCE = document.getElementById('TPPsy')
var RelevantCE = document.getElementById('SOTRPsy')
var CoherantCE = document.getElementById('SOTRcy')
var ContentCE = document.getElementById('ContentPsy')
var PreoccupationCE = document.getElementById('PreoccupationC')//
var PreoccupationDetailsCE = document.getElementById('DTidyAB')////
var DelusionCE = document.getElementById('DelusionC')//
var DelusionDetailsCE = document.getElementById('DDelusionC')////
var IdeasCE = document.getElementById('IdeasC')//
var IdeasvDetailsCE = document.getElementById('DIdeasC')////
var OtherDCE = document.getElementById('ODIAC')
var DetailsOtherCE = document.getElementById('DOD')
var MotorCoordinateCE = document.getElementById('MACoordinate')
var MotorInvoluuntaryCE = document.getElementById('MAInvoluntary')
var MotorActivityCE = document.getElementById('MAActivity')
var OrientationTimeCE = document.getElementById('OriTime')
var OrientationPlaceCE = document.getElementById('OriPlace')
var OrientationPersonCE = document.getElementById('OriPerson')
var OrientationMemoryCE = document.getElementById('OrinMemory')
var OrientationImmediateCE = document.getElementById('OrinImmediate')
var OrientationRecentCE = document.getElementById('OrinRecent')
var OrientationPostCE = document.getElementById('OrinPost')
var OrientationRemoteCE = document.getElementById('OrinRemote')
var GeneralCE = document.getElementById('GeneDetails')
var SpecificCE = document.getElementById('SpeciDetails')
var AbstractCE = document.getElementById('AbstrThink')
var AbstractDetailsCE = document.getElementById('AbstrThiDetails')
var JudgementTestCE = document.getElementById('JudgeTest')
var JudgementSocialCE = document.getElementById('JudgeSocial')
var InsightCE = document.getElementById('Insight')








////





function extract(){
    if (document.getElementById('hs').value == "No"){
    document.getElementById('div_1').style.display = "none";
    document.getElementById('div_2').style.display = "none";
    document.getElementById('div_3').style.display = "none";
    document.getElementById('div_4').style.display = "none";
    document.getElementById('div_5').style.display = "none";
    document.getElementById('div_6').style.display = "none";
    document.getElementById('div_7').style.display = "none";
    document.getElementById('div_8').style.display = "none";
    document.getElementById('div_9').style.display = "none";
    document.getElementById('div_10').style.display = "none";
    document.getElementById('div_11').style.display = "none";
    }else{
        document.getElementById('div_1').style.display = "block";
        document.getElementById('div_2').style.display = "block";
        document.getElementById('div_3').style.display = "block";
        document.getElementById('div_4').style.display = "block";
        document.getElementById('div_5').style.display = "block";
        document.getElementById('div_6').style.display = "block";
        document.getElementById('div_7').style.display = "block";
        document.getElementById('div_8').style.display = "block";
        document.getElementById('div_9').style.display = "block";
        document.getElementById('div_10').style.display = "block";
        document.getElementById('div_11').style.display = "block";
    }
}
function dosomthing(){
    if(document.getElementById('treatRecivied').value == "Yes"){
        document.getElementById('TR').style.display = "block";
    }else{
        document.getElementById('TR').style.display = "none";
    }
}
function extract2(){
    if (document.getElementById('hsAnxity').value == "No"){
    document.getElementById('get_1').style.display = "none";
    document.getElementById('get_2').style.display = "none";
    document.getElementById('get_3').style.display = "none";
    document.getElementById('get_4').style.display = "none";
    document.getElementById('get_5').style.display = "none";
    document.getElementById('get_6').style.display = "none";
    document.getElementById('get_7').style.display = "none";
    document.getElementById('get_8').style.display = "none";
    document.getElementById('get_9').style.display = "none";
    document.getElementById('get_10').style.display = "none";
    document.getElementById('get_11').style.display = "none";
    }else{
        document.getElementById('get_1').style.display = "block";
        document.getElementById('get_2').style.display = "block";
        document.getElementById('get_3').style.display = "block";
        document.getElementById('get_4').style.display = "block";
        document.getElementById('get_5').style.display = "block";
        document.getElementById('get_6').style.display = "block";
        document.getElementById('get_7').style.display = "block";
        document.getElementById('get_8').style.display = "block";
        document.getElementById('get_9').style.display = "block";
        document.getElementById('get_10').style.display = "block";
        document.getElementById('get_11').style.display = "block";
    }
}
function extract3(){
    if (document.getElementById('hsTraits').value == "No"){
    document.getElementById('div_69').style.display = "none";
    document.getElementById('div_22').style.display = "none";
    document.getElementById('div_33').style.display = "none";
    document.getElementById('div_44').style.display = "none";
    document.getElementById('div_55').style.display = "none";
    document.getElementById('div_66').style.display = "none";
    document.getElementById('div_77').style.display = "none";
    document.getElementById('div_88').style.display = "none";;
    }else{
        document.getElementById('div_69').style.display = "block";
        document.getElementById('div_22').style.display = "block";
        document.getElementById('div_33').style.display = "block";
        document.getElementById('div_44').style.display = "block";
        document.getElementById('div_55').style.display = "block";
        document.getElementById('div_66').style.display = "block";
        document.getElementById('div_77').style.display = "block";
        document.getElementById('div_88').style.display = "block";
    }
}
function extract4(){
    if (document.getElementById('Disorderf').value == "No"){
    document.getElementById('div_6969').style.display = "none";
    document.getElementById('div_222').style.display = "none";
    document.getElementById('div_333').style.display = "none";
    document.getElementById('div_444').style.display = "none";
    document.getElementById('div_555').style.display = "none";
    document.getElementById('div_666').style.display = "none";
    document.getElementById('div_777').style.display = "none";
    document.getElementById('div_888').style.display = "none";;
    }else{
        document.getElementById('div_6969').style.display = "block";
        document.getElementById('div_222').style.display = "block";
        document.getElementById('div_333').style.display = "block";
        document.getElementById('div_444').style.display = "block";
        document.getElementById('div_555').style.display = "block";
        document.getElementById('div_666').style.display = "block";
        document.getElementById('div_777').style.display = "block";
        document.getElementById('div_888').style.display = "block";
    }
}

function submit(){
if(document.getElementById('all_correct').checked){
if (document.getElementById('Adolecent_name').value == "" || document.getElementById('age').value == "" || document.getElementById('sex').value == "" || document.getElementById('date_of_birth').value== "" || document.getElementById('date_month').value== "" || document.getElementById('date_year').value== "" || document.getElementById('mobile').value== "" || document.getElementById('registration').value== "" || document.getElementById('Handeddness').value== "" || document.getElementById('tongue').value== "" || document.getElementById('Consanguinity').value == ""){
  alert('Some strings are missing.')
}else{

firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('PersonalInfo/').update({
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
  visit:document.getElementById('visit_number').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('ParentsComplaints/').update({
  PoorAttenstionSpan:document.getElementById('attention_P').value,
  PoorAcadamic:document.getElementById('Acadamic_P').value,
  PoorUnderstanding: document.getElementById('understanding_P').value,
  StubBornBehaviour:document.getElementById('Behaviour_P').value,
  EasyIrritability:document.getElementById('Irritability_P').value,
  Impulsivity:document.getElementById('Impulsivity_P').value,
  Hyperactivy:document.getElementById('Hyperactivy_P').value,
  ForgetsEasily:document.getElementById('ForgetsEasily_P').value,
  ChangeInSleep:document.getElementById('ChangeInSleep_P').value,
  ChangeInAppetite:document.getElementById('ChangeInAppetite_P').value,
  Withdrawn:document.getElementById('Withdrawn_P').value,
  Tearful:document.getElementById('Tearful_P').value,
  LackOfConfidence:document.getElementById('LackOfConfidence_P').value,
  Fatigue:document.getElementById('Fatigue_P').value,
  LackOfPlayingInterest:document.getElementById('LackOfPlayingInterest_P').value,
  Listless:document.getElementById('Listless_P').value,
  Irritable:document.getElementById('Irritable_P').value,
  Suicidality:document.getElementById('Suicidality_P').value,
  StrangerAnxitility:document.getElementById('StrangerAnxitility_P').value,
  Performance_anxity:document.getElementById('Performance_anxity_P').value,
  StageFear:document.getElementById('StageFear_P').value,
  SomaticComplaints:document.getElementById('SomaticComplaints_P').value,
  generalisedAnxity:document.getElementById('generalisedAnxity_P').value,
  BlacksOutInExam:document.getElementById('BlacksOutInExam_P').value,
  Sleepdisturbance:document.getElementById('Sleepdisturbance_P').value,
  OtherIssue:document.getElementById('other_P').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('TeachersComplaints/').update({
  PoorAttenstionSpan:document.getElementById('attention_T').value,
  PoorAcadamic:document.getElementById('Acadamic_T').value,
  PoorUnderstanding: document.getElementById('understanding_T').value,
  StubBornBehaviour:document.getElementById('Behaviour_T').value,
  EasyIrritability:document.getElementById('Irritability_T').value,
  Impulsivity:document.getElementById('Impulsivity_T').value,
  Hyperactivy:document.getElementById('Hyperactivy_T').value,
  ForgetsEasily:document.getElementById('ForgetsEasily_T').value,
  ChangeInSleep:document.getElementById('ChangeInSleep_T').value,
  ChangeInAppetite:document.getElementById('ChangeInAppetite_T').value,
  Withdrawn:document.getElementById('Withdrawn_T').value,
  Tearful:document.getElementById('Tearful_T').value,
  LackOfConfidence:document.getElementById('LackOfConfidence_T').value,
  Fatigue:document.getElementById('Fatigue_T').value,
  LackOfPlayingInterest:document.getElementById('LackOfPlayingInterest_T').value,
  Listless:document.getElementById('Listless_T').value,
  Irritable:document.getElementById('Irritable_T').value,
  Suicidality:document.getElementById('Suicidality_T').value,
  StrangerAnxitility:document.getElementById('StrangerAnxitility_T').value,
  Performance_anxity:document.getElementById('Performance_anxity_T').value,
  StageFear:document.getElementById('StageFear_T').value,
  SomaticComplaints:document.getElementById('SomaticComplaints_T').value,
  generalisedAnxity:document.getElementById('generalisedAnxity_T').value,
  BlacksOutInExam:document.getElementById('BlacksOutInExam_T').value,
  Sleepdisturbance:document.getElementById('Sleepdisturbance_T').value,
  OtherIssue:document.getElementById('other_T').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('SchoolHistory/').update({
  AgeOfAdmission:document.getElementById('Admission_age').value,
  MediumOFInstruction:document.getElementById('M_Instruction').value,
  Standard:document.getElementById('Standard').value,
  FailureInEachClass:document.getElementById('Failure').value,
  SchoolPerformance:document.getElementById('Performance').value,
  BehaviourInSchool:document.getElementById('Behaviour_School').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('FamilyHistory/').update({
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
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('Psyfather/').update({
  Education:document.getElementById('Education_Father').value,
  Occupation:document.getElementById('Occupation_Father').value,
  Personality:document.getElementById('Personality_Father').value,
  Traits:document.getElementById('Traits_Father').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('Psymother/').update({
  Education:document.getElementById('Education_Mother').value,
  Occupation:document.getElementById('Occupation_Mother').value,
  Personality:document.getElementById('Personality_Mother').value,
  Traits:document.getElementById('Traits_Mother').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('Psyothers/').update({
  Education:document.getElementById('Education_Others').value,
  Occupation:document.getElementById('Occupation_Others').value,
  Personality:document.getElementById('Personality_Others').value,
  Traits:document.getElementById('Traits_Others').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('BirthAndInfancy/').update({
  PregnencySize:document.getElementById('Pregnency_Lenght').value,
  IllnessPregnency:document.getElementById('IllnessDuringPregnency').value,
  WhatIlleness:document.getElementById('WhatIllness').value,
  ExposureToDrug:document.getElementById('Drug_Explosure').value,
  MotherAgeWhenChildWBorn:document.getElementById('age_mother').value,
  HospitalDelivery:document.getElementById('homeHospital').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('HistoryOfLabour/').update({
  DileveryType:document.getElementById('Delivery').value,
  Duration:document.getElementById('Duration').value,
  Cry:document.getElementById('Cry').value,
  Vaccination:document.getElementById('Vaccination').value,
  BirthWeight:document.getElementById('weight_birth').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('feedingHistory/').update({
  Type:document.getElementById('Feeding_Type').value,
  AgeofWearing:document.getElementById('wearing_age').value,

});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('DevelopmentHistory/').update({
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
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('ToiletTraining/').update({
  Bowels:document.getElementById('Bowels').value,
  Bladder:document.getElementById('Bladder').value,
  Punishment:document.getElementById('PAOT').value
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('TemperamentalTraits/').update({
  ActivityLevel:document.getElementById('ActivityLevel').value,
  Rhythmicity:document.getElementById('Rhythmicity').value,
  Distractibility:document.getElementById('Distractibility').value,
  Approch:document.getElementById('AW').value,
  Adaptibility:document.getElementById('Adaptibility').value,
  Attention:document.getElementById('AttentionSpan').value,
  Intensity:document.getElementById('IOR').value,
  Threshold:document.getElementById('TOFREsponsive').value,
  Mood:document.getElementById('QOM').value,
  Other:document.getElementById('OTAIFANY').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('NeuroticTraits/').update({
   AcceptanceNT:document.getElementById('Acceptance').value,
   PunishmentNT:document.getElementById('Punishment').value,
   RidculeNT:document.getElementById('Ridcule').value,
   PrecipitatingNT:document.getElementById('Precipitating').value,
   RelievingNT:document.getElementById('Relieving_Factor').value,
   WettingNT:document.getElementById('Bed_Wetting').value,
   SuckingNT:document.getElementById('thumbSucking').value,
   BitingNT:document.getElementById('NailBitting').value,
   SleepWalkingcNT:document.getElementById('SleepWalking').value,
 NightMaresNT:document.getElementById('NightMare').value,
 MasturbationNT:document.getElementById('Masturbation').value,
   PicaNT:document.getElementById('Pica').value,
   BruxismNT:document.getElementById('Bruxism').value,
 PyromaniaNT:document.getElementById('Pyromania').value,
  FearsNT:document.getElementById('fears').value,
   PhobiasNT:document.getElementById('phobias').value,
   DepressionNT:document.getElementById('hs').value,
   ChangeNT:document.getElementById('CISLEEP').value,//
   ChangeinAppetiteNT:document.getElementById('CISPPEte').value,//
   WithdrawnNT:document.getElementById('withdrawnnn').value,//
   TearfulNT:document.getElementById('Tearful').value,//
   LackOfConfidenceNT:document.getElementById('LOC').value,//
   FatigueNT:document.getElementById('Fatigue').value,//
   LackOfInterestPlayNT:document.getElementById('LoIiP').value,//
   ListlessNT:document.getElementById('Listlessss').value,//
   SuicidalityNT:document.getElementById('Suicidality_Pfgf').value,//
   OtherNT:document.getElementById('Otherhddepression').value,//
   TreatmentNT:document.getElementById('treatRecivied').value,// SubPart
   DetailsNT:document.getElementById('OtherTd').value,///
   AnxityNT:document.getElementById('hsAnxity').value,//Main
   StrangerNT:document.getElementById('StrangerAnxity').value,// //
   StrangerDetailsNT:document.getElementById('StrangerDetials').value,////
   PerformanceNT:document.getElementById('PerformaceA').value,// //
   PerformanceDetailsNT:document.getElementById('PerformanceDetials').value,////
   StageNT:document.getElementById('StageA').value,// //
   StageDetailsNT:document.getElementById('StageDetials').value,////
   PhobiasNT:document.getElementById('PhobiasA').value,// //
   PhobiasDetailsNT:document.getElementById('PhobiasDetials').value,////
   PanicNT:document.getElementById('PanicA').value,// //
   PanicDetailsNT:document.getElementById('PanicDetails').value,////
   ObsessiveNT:document.getElementById('OCA').value,// //
   ObsessiveDetailsNT:document.getElementById('OCDetials').value,////
   ComplaintsNT : document.getElementById('SomaticA').value,// //
   ComplaintsDetailsNT:document.getElementById('SomaticDetials').value,
   GeneralisedNT:document.getElementById('GeneralisedA').value,
   GeneralisedDetailsNT:document.getElementById('GeneralisedDetials').value,
   BlacksNT:document.getElementById('BlackA').value,
   BlacksDetailsNT:document.getElementById('BlacksoutInExamDetials').value,
   DistrubanceNT:document.getElementById('SleepA').value,
   DistrubanceDetailsNT:document.getElementById('SleepDetials').value,
   AppetiteNT:document.getElementById('AppetiteA').value,
   AppetiteDetailsNT:document.getElementById('AppetiteDetials').value,
   TraitsNT:document.getElementById('hsTraits').value,//The Main  Part
   temperNT:document.getElementById('losttemper').value,//
   companyNT:document.getElementById('RTC').value,//
   BlamesNT:document.getElementById('blamesother').value,//
   resentfulNT:document.getElementById('AngryRecentfull').value,//
   arguesNT:document.getElementById('Otherargues').value,//
   DeliberatelyNT:document.getElementById('annoys').value,//
   AnnoyedNT:document.getElementById('TEA').value,//
   vindictiveNT:document.getElementById('Spitefull').value,//
   DdisordersNT:document.getElementById('Disorderf').value,//TheMMainPart
   AggressionNT:document.getElementById('Aggerssion').value,//
   BulliesNT:document.getElementById('Bullies').value,//
   ThreatenNT:document.getElementById('Threaten').value,//
   FightsNT:document.getElementById('Fights').value,//
   CrueltyNT:document.getElementById('Cruelty').value,//
   DestructionNT:document.getElementById('DIP').value,//
   ViolationNT:document.getElementById('SVAR').value,//
   OtheraNT:document.getElementById('Otia').value,

});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('ToiletTraining/').update({
  Bowels:document.getElementById('Bowels').value,
  Bladder:document.getElementById('Bladder').value,
  Punishment:document.getElementById('PAOT').value
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('PastHistory/').update({
  CNSDisease:document.getElementById('CNSD').value,
  SystemicDisease :document.getElementById('SysD').value,
  Psychomaticillness:document.getElementById('Psylllness').value,
  Hospitalisation:document.getElementById('Hospitalisation').value,
  Psychiatricillness:document.getElementById('PAOT1').value,
});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('Behaviour/').update({
  Hyperactivity:document.getElementById('HyperActivity').value,
  Active:document.getElementById('ActiveBehavior').value,
  Lethargic:document.getElementById('Lethargic').value,
  Overtalkactiver:document.getElementById('Overtalkactiver').value,
  Silent:document.getElementById('Silent').value,
  Obedient:document.getElementById('Obesient').value,
  Disobedient:document.getElementById('Disobedient').value,
  DisobedientOther:document.getElementById('OtherBehaviour').value,
  DisobedientOtherDetails:document.getElementById('OtherBehaviotAnswer').value,
  Normal:document.getElementById('NormalSleep').value,
  Good:document.getElementById('GS').value,
  Poor:document.getElementById('PS').value,
  Average:document.getElementById('AS').value,
  AverageOther:document.getElementById('OtherSleep').value,
  AaverageOtherDetails:document.getElementById('OtherSleepAnswer').value,
  Willingnesstogo:document.getElementById('WillingnessSchool').value,
  notwillingWhatIs:document.getElementById('INWWID').value,
  OtherOfWhatIs:document.getElementById('OtherNWAnswer').value,
  childabsentisism:document.getElementById('ParentsAwareAbsent').value,
  FrequencyOfabsentisism:document.getElementById('OtherSleepAnswer1').value,
  theirattitude:document.getElementById('AttitdeTheir').value,
  theirattitudeOther:document.getElementById('OtherAttitudeSchool').value,

});
firebase.database().ref(document.getElementById('Adolecent_name').value+ document.getElementById('visit_number').value+'/').child('ClinicalExamination/').update({
  consciousnessCE : document.getElementById('LOS').value,
  operativeCE : document.getElementById('operativeCLINICAL').value,
  OrientationCE : document.getElementById('OrientationClinical').value,
  TimeCE : document.getElementById('TimeOrientation').value,
  PlaceCE : document.getElementById('PlaceOrientation').value,
  PersonCE : document.getElementById('PersonOrientation').value,
  BuiltCE : document.getElementById('BuiltClinical').value,
  NutritionCE : document.getElementById('NutritionClinical').value,
  BMICE : document.getElementById('BMIClinical').value,
  AnaemiaCE : document.getElementById('AnaemiaClinical').value,
  CyanosisCE : document.getElementById('CyanosisClinical').value,
  JaurdiceCE : document.getElementById('JaurdiceClinical').value,
  LymphCE : document.getElementById('LymphClinical').value,
  ClubbingCE : document.getElementById('ClubbingClinical').value,
  OedemaCE : document.getElementById('OedemaClinical').value,
  PulseCE : document.getElementById('PulseClinical').value,
  RespirationCE : document.getElementById('RespirationClinical').value,
  RateCE : document.getElementById('RateClinical').value,
  RhythmCE : document.getElementById('RhythmClinical').value,
  TypeCE : document.getElementById('TypeClinical').value,
  DepthCE : document.getElementById('depthClinical').value,
  TemperatureCE : document.getElementById('TemperatureClinical').value,
  PressureCE : document.getElementById('PressureClinical').value,
  DeforminityCE : document.getElementById('AODClinical').value,
  DetailsCE : document.getElementById('ODIAClinical').value,
  CardiovascularCE : document.getElementById('SysCardiovascular').value,
  S1CE : document.getElementById('SysS1').value,
  S2CE : document.getElementById('SysS2').value,
  MurmursCE : document.getElementById('SysMurmurs').value,
  RespiratoryCE : document.getElementById('SysRSAE').value,
  AdventitiousCE : document.getElementById('SysAS').value,
  NervousCE : document.getElementById('NervousSys').value,
  ToneCE : document.getElementById('ToneNev').value,
  PowerCE : document.getElementById('PowerNev').value,
  ReflexesCE : document.getElementById('ReflexesNev').value,
  CerebellarCE : document.getElementById('CerebellarNev').value,
  InvoluntaryCE : document.getElementById('InvvvoluntaryNev').value,
  CoordinateCE : document.getElementById('CoordinateNev').value,
  NeirologicalCE : document.getElementById('SNNev').value,
  diadokokinesiaCE : document.getElementById('DdNev').value,
  balancingCE : document.getElementById('PoorNev').value,
  ApraxiaCE : document.getElementById('ApraNev').value,
  GraphaestesiaCE : document.getElementById('GraphaestesiaNev').value,
  coordinationCE : document.getElementById('LRcoorinationNev').value,
  VisionCE : document.getElementById('VisionNev').value,
  HearingCE : document.getElementById('HearingNev').value,
  AppearanceCE : document.getElementById('AppearancePsy').value,
  TidyCE : document.getElementById('TidyAB') .value,
  TidyDetailsCE : document.getElementById('DTidyAB').value,
  UntidyCE : document.getElementById('UntidyAB') .value,
  UntidyDetailsCE : document.getElementById('DUntidyAB').value,
  InappropraitelyCE : document.getElementById('idAB').value,
  InappropraitelyDetailsCE : document.getElementById('DidAB').value,
  behaviourCE : document.getElementById('BAOAB').value,
  behaiviordetailsCE : document.getElementById('DBAOAB').value,
  ExaminerCE : document.getElementById('ReactiontoE').value,
  AffectiveCE : document.getElementById('AffectiveE').value,
  AppropraitnessCE : document.getElementById('AppropraitnessPsy').value,
  SpeechCE : document.getElementById('SpeechPsy').value,
  SpeechDetailsCE : document.getElementById('SODPsy').value,
  AttentionCE : document.getElementById('AttentionPsy').value,
  AttentionDetailsCE : document.getElementById('SAttentionPsy').value,
  MoodCE : document.getElementById('moodPsy').value,
  ProductivityCE : document.getElementById('TPPsy').value,
  RelevantCE : document.getElementById('SOTRPsy').value,
  CoherantCE : document.getElementById('SOTRPcy').value,
  ContentCE : document.getElementById('ContentPsy').value,
  PreoccupationCE : document.getElementById('PreoccupationC5').value,
  PreoccupationDetailsCE : document.getElementById('DTidyAB').value,
  DelusionCE : document.getElementById('DelusionC').value,
  DelusionDetailsCE : document.getElementById('DDelusionC').value,
  IdeasCE : document.getElementById('IdeasC').value,
  IdeasvDetailsCE : document.getElementById('DIdeasC').value,
  OtherDCE : document.getElementById('ODIAC').value,
  DetailsOtherCE : document.getElementById('DOD').value,
  MotorCoordinateCE : document.getElementById('MACoordinate').value,
  MotorInvoluuntaryCE : document.getElementById('MAInvoluntary').value,
  MotorActivityCE : document.getElementById('MAActivity').value,
  OrientationTimeCE : document.getElementById('OriTime').value,
  OrientationPlaceCE : document.getElementById('OriPlace').value,
  OrientationPersonCE : document.getElementById('OriPerson').value,
  OrientationMemoryCE : document.getElementById('OrinMemory').value,
  OrientationImmediateCE : document.getElementById('OrinImmediate').value,
  OrientationRecentCE : document.getElementById('OrinRecent').value,
  OrientationPostCE : document.getElementById('OrinPost').value,
  OrientationRemoteCE : document.getElementById('OrinRemote').value,
  GeneralCE : document.getElementById('GeneDetails').value,
  SpecificCE : document.getElementById('SpeciDetails').value,
  AbstractCE : document.getElementById('AbstrThink').value,
  AbstractDetailsCE : document.getElementById('AbstrThiDetails').value,
  JudgementTestCE : document.getElementById('JudgeTest').value,
  JudgementSocialCE : document.getElementById('JudgeSocial').value,
  InsightCE : document.getElementById('Insight').value,

});
alert('Wait For Five Second Until Print Option Come !')
setTimeout(function(){
print()
window.location = 'main.html'
},5000)
}

//}
}else{
  alert('You didnt Confirm That If All The Information Are Correct.')
}
}
function stop(event){
    event.preventDefault();
    //code here
  }