'use strict';
window.onload=()=>{
	const words=[
		['労働','labor','labor.jpg'],
		['働きすぎる','overwork','overwork.jpg'],
		['会社','firm','firm.jpg'],
		['労働組合','union','union.jpg'],
		['経営','administration','administration.jpg'],
		['秘書','secretary','secretary.jpg'],
		['編集者','editor','editor.jpg'],
		['依頼人','client','client.jpg'],
		['同僚','colleague','colleague.jpg'],
		['基礎','basis','basis.jpg'],
		['要素','element','element.jpg'],
		['を構成する','constitute','constitute.jpg'],
		['を統一する','unify','unify.jpg'],
		['団結する','unite','unite.jpg'],
		['結びつける','combine','combine.jpg'],
		['殺人','murder','murder.jpg'],
		['を逮捕する','arrest','arrest.jpg'],
		['刑務所','prison','prison.jpg'],
		['犯罪','vice','vice.jpg'],
		['目撃者','witness','witness.jpg'],
		['対立、紛争','conflict','conflict.jpg'],
		['弾丸','bullet','bullet.jpg'],
		['傷','wound','wound.jpg'],
		['勝利','triumph','triumph.jpg'],
		['軍事的な','military','military.jpg'],
		['戦略','strategy','strategy.jpg'],
		['を征服する','conquer','conquer.jpg'],
		['を守る','defend','defend.jpg'],
		['口論する','quarrel','quarrel.jpg'],
		['を襲う','rob','rob.jpg'],
		['を奪う','deprive','deprive.jpg'],
		['を壊滅させる','devastate','devastate.jpg'],
		['危険','hazard','hazard.jpg'],
		['孤児','orphan','orphan.jpg'],
		['幼児','infant','infant.jpg'],
		['奴隷','slave','slave.jpg'],
		['知人','acquaintance','acquaintance.jpg'],
		['商人','merchant','merchant.jpg'],
		['住人','resident','resident.jpg'],
		['乗組員','crew','crew.jpg'],
		['通勤する','commute','commute.jpg'],
		['を追いかける','chase','chase.jpg'],
		['を追い越す','overtake','overtake.jpg'],
		['薄れる','fade','fade.jpg'],
		['溶ける','dissolve','dissolve.jpg'],
		['浮かぶ','float','float.jpg'],
		['沈む','sink','sink.jpg'],
		['変動する','fluctuate','fluctuate.jpg'],
		['循環する','circulate','circulate.jpg'],
		['を変える','transform','transform.jpg'],
		['転換','shift','shift.jpg'],
		['を修正する','modify','modify.jpg'],
		['を修正する、改正する','revise','revise.jpg'],
		['車両','vehicle','vehicle.jpg'],
		['航海','voyage','voyage.jpg'],
		['を確認する','confirm','confirm.jpg'],
		['を確実にする','ensure','ensure.jpg'],
		['に取り組む','address','address.jpg'],
		['取り組み方','approach','approach.jpg'],
		['を解決する','resolve','resolve.jpg'],
		['(紛争など)を解決する','settle','settle.jpg'],
		['に警告する','warn','warn.jpg'],
		['に強いる','force','force.jpg'],
		['を促進させる','boost','boost.jpg'],
		['訴える','appeal','appeal.jpg'],
		['跳ぶ','leap','leap.jpg'],
		['(ぐいっと)つかむ','grab','grab.jpg'],
		['をつかむ','seize','seize.jpg'],
		['を投げる','cast','cast.jpg'],
		['を平手打ちする','slap','slap.jpg'],
		['を気絶させる','stun','stun.jpg'],
		['を照らす','illuminate','illuminate.jpg'],
		['を修繕する','mend','mend.jpg'],
		['反応する','react','react.jpg'],
		['耐える','endure','endure.jpg'],
		['に偶然出会う','encounter','encounter.jpg'],
		['を怠る','neglect','neglect.jpg'],
		['を経験する','undergo','undergo.jpg'],
		['を捜し出す','trace','trace.jpg'],
		['を行う','conduct','conduct.jpg'],
		['現れる','emerge','emerge.jpg'],
		['展開する','unfold','unfold.jpg'],
		['由来する','derive','derive.jpg'],
		['を所有している','possess','possess.jpg'],
		['を保持する','retain','retain.jpg'],
		['を確保する','secure','secure.jpg'],
		['を捕らえる','capture','capture.jpg'],
		['調査','inqury','inqury.jpg'],
		['専攻する','specialize','specialize.jpg'],
		['学期','semester','semester.jpg'],
		['生物学','biology','biology.jpg'],
		['生態','ecology','ecology.jpg'],
		['哲学','philosophy','philosophy.jpg'],
		['地理','geography','geography.jpg'],
		['心理学','psychology','psychology.jpg'],
		['(大学などの)機関','institution','institution.jpg'],
		['寮','dormitory','dormitory.jpg'],
		['考え','notion','notion.jpg'],
		['概念','concept','concept.jpg'],
		['瞑想','meditation','meditation.jpg'],
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
			msg=`不正解!正解は${words[index][1]}`;
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
		img.src='../images/words/'+words[index][2];
	}
	setItem(index);
}
