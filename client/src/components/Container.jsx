import PetCard from "./PetCard";
import useEth from "../contexts/EthContext/useEth";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";

export default function PetContainer({ pets }) {
    const {
        state: { contract, accounts, artifact },
    } = useEth();

    const [adopters, setAdopters] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleAdopt = async (petId) => {
        await contract.methods.adopt(petId).send({ from: accounts[0] });
        const data = await contract.methods.getAdopters().call({ from: accounts[0] });
        setAdopters(data);
    }

    useEffect(() => {
        (async () => {
            if (accounts) {
                setLoading(true);
                const data = await contract.methods.getAdopters().call({ from: accounts[0] });
                setAdopters(data);
                setLoading(false);
            }
        })();

        return () => {

        }
    }, [accounts])


    return <>
        {artifact ? <></> : <span>No artifact deployed.</span>}
        {
            loading ? <Spinner>Loading</Spinner> :
                <ul style={{ clear: "both", listStyle: "none" }}>
                    {
                        pets.map((pet) => (
                            <li key={pet.id} style={{ float: "left", margin: "10px" }}>
                                <PetCard pet={pet} adopters={adopters} handleAdopt={handleAdopt} />
                            </li>))
                    }
                </ul>
        }
    </>
}