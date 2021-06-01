const tanah = document.querySelectorAll('.tanah');
const etek = document.querySelectorAll('.etek');
const papanSkor = document.querySelector('.papan-Skor')
const pop = document.querySelector('#pop');
const pop2 = document.querySelector('#pop2');
/*const mulai = document.querySelector('mulai')*/
/*mencari elemet yang ber id tanah,atek, mulai*/

let tanahsebelumnya;
let selesai;
let skor;

function randomKarakter(tanah){
	const t = Math.floor(Math.random() * tanah.length);
	const tRandom = tanah[t];
	if (tRandom == tanahsebelumnya){
		randomKarakter(tanah)
	}
	tanahsebelumnya = tRandom; 
	return tRandom;
	/*Math.random berguna untuk membangkitkan bilangan 0 samapi 1, karena saya ingin membangkitan blangan 0 - jumlah elemnt pada element tanah maka saya menggunakan  Math.random() * tanah.length
	untuk membulatkan bilangan yang saya bangkitakan saya mengggunakan Math.floor untuk membulatkan ke bawah(round= pembulatan terdekat, ceil= membulatkan*/
}
function randomWaktu(min, max){
	return Math.round(Math.random() * (max - min) + min);
}

function munculkanKarakter(){
	pop2.play();
	const tRandom = randomKarakter(tanah);
	const wRandom = randomWaktu(1000, 1500);
	tRandom.classList.add('muncul');
	setTimeout(() => {
		tRandom.classList.remove('muncul')
		if (!selesai){
			munculkanKarakter()
		};
	}, wRandom);
}

function mulai(){
	selesai = false;
	skor = 0;
	papanSkor.textContent = 0;
	munculkanKarakter();
	setTimeout(() => {
		selesai = true;
	}, 10000);
}

function pukul(){
	skor ++;
	pop.play();
	papanSkor.textContent = skor;
	this.parentNode.classList.remove('muncul')

}

etek.forEach(t => {
	t.addEventListener('click', pukul)
});