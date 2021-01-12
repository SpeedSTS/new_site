const roundAccurately = (number, decimalPlace) => Number(Math.round(number + "e" + decimalPlace) + "e-" + decimalPlace); // Funkcja zwracająca dokładną liczę po przecinku.
const pay_Adam = 11000;
const skl_eme = 0.0976
const skl_ren = 0.015;
const skl_ch = 0.0245;
const sk_zdr = 0.09;
const sk_zdr_odl = 0.0775;
const podst_opod = 300;
const podatek_nalezny_procent = 0.17;
const kwota_wolna_od_podatku = 43.76;
let sum_skl_ub_spol = (pay_Adam * skl_eme) + (pay_Adam * skl_ren) + (pay_Adam * skl_ch); // Zmienna licząca sumę składek na ubezpieczenie społeczne.
let suma_zaok_skl_ub_spol = roundAccurately(sum_skl_ub_spol,2);
let skladka_zdrowotna_w_calosci = roundAccurately((pay_Adam - suma_zaok_skl_ub_spol) * sk_zdr,2);
let skladka_zd_podlegajaca_odliczeniu = roundAccurately((pay_Adam - suma_zaok_skl_ub_spol) * sk_zdr_odl,2);
let podstawa_opodatkowania = roundAccurately((pay_Adam - suma_zaok_skl_ub_spol - podst_opod),0);
let podatek_nalezny = roundAccurately((podstawa_opodatkowania * podatek_nalezny_procent),2) - kwota_wolna_od_podatku;
let zaliczka_na_podatek_dochodowy = roundAccurately((podatek_nalezny - skladka_zd_podlegajaca_odliczeniu),0);
let kwota_netto = roundAccurately((pay_Adam - suma_zaok_skl_ub_spol - skladka_zdrowotna_w_calosci - zaliczka_na_podatek_dochodowy),2);
document.getElementById("pay").innerHTML = kwota_netto;
console.log(kwota_netto);