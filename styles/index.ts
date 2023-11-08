import { MonteCarlo, Montserrat } from "next/font/google";

const monte = MonteCarlo({weight:'400', preload:false})
const montserrat = Montserrat({weight: ['300', '400', '500', '600'], preload:false})



export {
    monte,
    montserrat
}