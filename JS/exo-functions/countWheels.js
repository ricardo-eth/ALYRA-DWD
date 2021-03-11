const NB_WHEELS_CYCLE = 1
const NB_WHEELS_MOTOCYCLE = 2
const NB_WHEELS_CAR = 4
const NB_WHEELS_LIMO = 6

const nbMonocycle = 1
const nbMoto = 1
const nbVoiture = 1
const nbLimousine = 1

const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {

  return nb_monocycle * NB_WHEELS_CYCLE + nb_moto * NB_WHEELS_MOTOCYCLE + nb_voiture * NB_WHEELS_CAR + nb_limousine * NB_WHEELS_LIMO
}

console.log(countWheels(nbMonocycle, nbMoto, nbVoiture, nbLimousine))