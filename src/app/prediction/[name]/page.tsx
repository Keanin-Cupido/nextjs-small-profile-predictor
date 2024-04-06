import Image from "next/image";
import Link from "next/link";

const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
}
const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
}
const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
}

interface Params {
    params: { name: string }
}

export default async function Prediction({params}: Params) {
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);

    const [age, gender, country] = await Promise.all([
        ageData,
        genderData,
        countryData
    ]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-center text-3xl text-yellow-400 mb-4">Personal Info</div>

                <img src={`https://api.dicebear.com/8.x/pixel-art/svg?seed=${params.name}`} alt="avatar" 
                    className="w-[96px] h-[96px] rounded-lg border border-yellow-400 bg-yellow-300 mb-4" 
                />
                <div className="text-yellow-400"><b>Name:</b> {params.name}</div>
                <div className="text-yellow-400"><b>Age:</b> {age?.age}</div>
                <div className="text-yellow-400"><b>Gender:</b> {gender?.gender}</div>
                <div className="text-yellow-400"><b>Country:</b> {country?.country[0]?.country_id}</div>

                <Link href="/">
                    <button className="mt-4 px-6 py-2 text-black rounded-lg cursor-pointer bg-yellow-400 hover:bg-yellow-500">Back</button>
                </Link>
            </div>
        </div>
    )
}