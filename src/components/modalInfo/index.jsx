import { Modal, Close, Container, Infos, ImageAndTitle, Habilities } from "./styles";
import { PokemonsContext } from "../../hooks/pokemonsContext";

export function ModalInfo() {
  const { isModalOpen, setisModalOpen, modalInfo } = PokemonsContext();
  return (
    <Container>
      <Modal isAddOpen={isModalOpen}></Modal>
      <Close
        isAddOpen={isModalOpen}
        onClick={() => setisModalOpen(isModalOpen ? false : true)}
      >
        x
      </Close>
      { isModalOpen && <Infos isAddOpen={isModalOpen}>
        <ImageAndTitle>
        <img
          src={modalInfo.sprites.front_default ? modalInfo.sprites.front_default : null}
          alt="pokemon"
          width={"150px"}
        />
        <div>
        <h3>
          {modalInfo.name ? modalInfo.name[0].toUpperCase() + modalInfo.name.substr(1) : null}
        </h3>
        <h5>Weigth: {modalInfo.weight}</h5>
        <h5>Height: {modalInfo.height}</h5>
        </div>
        </ImageAndTitle>
        <Habilities>
        { 
            modalInfo.stats.map((status) => {
                return (
                    <table>
                    <tr>
                        <th>{status.stat.name[0].toUpperCase() + status.stat.name.substr(1)} </th>
                    </tr>
                    <tr>
                        <td>{status.base_stat}</td>
                    </tr>
                    </table>
                )
            })
        }
        </Habilities>
      </Infos>}
    </Container>
  );
}
