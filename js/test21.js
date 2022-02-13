'use strict';
window.onload=()=>{
	const words=[
		['討論','debate','debate.jfif'],
		['～を批判する','criticize','criticize.jfif'],
		['～を非難する','accuse','accuse.jfif'],
		['（～と）言い張る，（強く）主張する','insist','insist.jfif'],
		['（～に感情的に）反対する','object','object.jfif'],
		['（～に対して）抗議する','protest','protest.jpg'],
		['論争を招く，物議をかもす','controversial','controversial.jpg'],
		['きっと～（する，～する［である］に違いない）','bound','bound.jpg'],
		['きっと～だと思う','bet','bet.jpg'],
		['（人）を祝う，～にお祝いを述べる','congratulate','congratulate.jpg'],
		['（A）を（Bのことで）褒める，称える','praise','praise.jpg'],
		['名誉，栄誉','honor','honor.jpg'],
		['おしゃべりする','chat','chat.jpg'],
		['（～に）言及する，参照する','refer','refer.jpg'],
		['～について述べる，言及する','mention','mention.jpg'],
		['～を伝える','convey','convey.jpg'],
		['～を強調する','emphasize','emphasize.jpg'],
		['～を誇張する','exaggerate','exaggerate.jpg'],
		['（～に）返事をする，答える','reply','reply.jpg'],
		['（手紙や問いなどに）返答する','respond','respond.jpg'],
		['ささやく','whisper','whisper.jpg'],
		['発言','remark','remark.jpg'],
		['～を観察する','observe','observe.jpg'],
		['理論','theory','theory.jpg'],
		['分析','analysis','analysis.jpg'],
		['実験','experiment','experiment.jpg'],
		['装置','device','device.jpg'],
		['現象','phenomenon','phenomenon.jpg'],
		['物質','substance','substance.jpg'],
		['化学物質','chemical','chemical.jpg'],
		['燃料','fuel','fuel.jpg'],
		['原子力の，核の','nuclear','nuclear.jpg'],
		['統計（値）','statistics','statistics.jpg'],
		['～を追求する，続ける','pursue','pursue.jpg'],
		['～をやり遂げる','accomplish','accomplish.jpg'],
		['～を克服する','overcome','overcome.jpg'],
		['（義務，願望など）を果たす','fulfill','fulfill.jpg'],
		['（A）を（Bに）ささげる','devote','devote.jpg'],
		['狙う','aim','aim.jpg'],
		['難問，課題','challenge','challenge.jpg'],
		['試み','trial','trial.jpg'],
		['めまいがして','dizzy','dizzy.jpg'],
		['（顔色が）青白い，青ざめた','pale','pale.jpg'],
		['食欲','appetite','appetite.jpg'],
		['とてもお腹が空いている','starve','starve.jpg'],
		['精神の','mental','mental.jpg'],
		['休憩','rest','rest.jpg'],
		['痛み','ache','ache.jpg'],
		['手術','surgery','surgery.jpg'],
		['病気','disease','disease.jpg'],
		['症状','symptom','symptom.jpg'],
		['がん','cancer','cancer.jpg'],
		['救急車','ambulance','ambulance.jpg'],
		['（～から）回復する','recover','recover.jpg'],
		['（のどや筋肉が）痛い','sore','sore.jpg'],
		['（手足などが）腫れる','swell','swell.jpg'],
		['咳をする','cough','cough.jpg'],
		['出血する','bleed','bleed.jpg'],
		['（色，光などが）かすかな','faint','faint.jpg'],
		['～を疲れ果てさせる','exhaust','exhaust.jpg'],
		['～を治療する','cure','cure.jpg'],
		['障がいのある','disabled','disabled.jpg'],
		['（筋肉などが）凝った，（動かすと）痛い','stiff','stiff.jpg'],
		['筋肉','muscle','muscle.jpg'],
		['舌','tongue','tongue.jpg'],
		['感覚','sense','sense.jpg'],
		['汗','sweat','sweat.jpg'],
		['国籍','nationality','nationality.jpg'],
		['市民','citizen','citizen.jpg'],
		['（一般）市民の','civil','civil.jpg'],
		['人種の，民族の','racial','racial.jpg'],
		['国内の','domestic','domestic.jpg'],
		['田舎の','rural','rural.jpg'],
		['郊外','suburb','suburb.jpg'],
		['国境（地帯），境界','border','border.jpg'],
		['重荷，負担','burden','burden.jpg'],
		['（～への）影響','impact','impact.jpg'],
		['地位','status','status.jpg'],
		['（～に）等しい，平等な','equal','equal.jpg'],
		['関係','relationship','relationship.jpg'],
		['（人，物の）評判','reputation','reputation.jpg'],
		['（世の中の）風潮，傾向','trend','trend.jpg'],
		['（政府あるいは企業による）事業，制度','service','service.jpg'],
		['宗教','religion','religion.jpg'],
		['道徳的な','moral','moral.jpg'],
		['基準，水準','standard','standard.jpg'],
		['繁栄','prosperity','prosperity.jpg'],
		['危機','crisis','crisis.jpg'],
		['偏見，先入観','prejudice','prejudice.jpg'],
		['差別','discrimination','discrimination.jpg'],
		['慈善（事業）','charity','charity.jpg'],
		['恩恵','benefit','benefit.jpg'],
		['福祉','welfare','welfare.jpg'],
		['（地域）社会，共同体（の人々）','community','community.jpg'],
		['個人，個体','individual','individual.jpg'],
		['役人，役員','official','official.jpg'],
		['（外国からの）移民','immigrant','immigrant.jpg'],
		['ボランティア','volunteer','volunteer.jpg'],
		['（～に）貢献する','contribute','contribute.jpg'],
		['～を廃止する','abolish','abolish.jpg'],
	];
	const ja =document.getElementById('ja');
	const entry=document.getElementById('entry');
	const img=document.getElementById('img');
	const btn=document.getElementById('btn');
	const result=document.getElementById('result');
	let index=0;
	let correct=0;
	btn.addEventListener('click',()=>{
		let ans=entry.value.toLowerCase();
		let msg='';
		if (ans == words[index][1]){
			correct++;
			msg='正解!';
		}else{
			msg=`不正解!${words[index][0]}の英単語は${words[index][1]}`;
		}
		if(index==words.length-1){
			msg+=`<br>全${words.length}問中,${correct}問正解`;
			index=-1;
		}
		result.innerHTML=msg;
		result.classList.remove('fade');
		setTimeout(function(){
			result.classList.add('fade');
		},1500);
		setItem(++index);
		entry.focus();
	});
	function setItem(index){
		entry.value='';
		ja.textContent=words[index][0];
		img.src='https://104yuki-f.github.io/104yuki-f/images/words/'+words[index][2];
	}
	setItem(index);
}
