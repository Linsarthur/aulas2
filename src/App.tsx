import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const numPositivo = () => {
    if (count2 > 0) {
      setCount2((count2) => count2 - 1);
    } else if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img
            src="data:image/png;base64,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"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAEBCAMAAAAQKvrqAAAAyVBMVEX///8oYab+/v7RLxQaW6O6iEMAU6AVWaKJosfQJAClt9QgX6UOV6Hfgnjk6vLghXu9yt4AUZ/t8fZDca5liLnE0OKXrc2RqMt/msOFn8bc4+7J1OSzwtrNAABbgbb4+vy2gDDAkla4hDo1aaqtvtcATJ3U3Omfs9HQKQjt4tRPebJwkL5hhbj17ubfyrHStI/45uT129jSOCDIoW++j0/ZwKHIonK0fCjno5zVSTblmpLUQCzijoXl07/QsIjw5toARprqrqjWTTwPq2s3AAANaUlEQVR4nO2da3+byBWHRxSDIogiZOtiWbEdWZYS2U7aehO322Y37ff/UOWcuTCDuAwwCKY//V/sWhgN88AzZwbsyIS0nZeX1g/Rfr5+7boHBvLpU9c9aJ6Xtzf7ffq62djv0+tm89p1H5rGub+4uHe67kXD/ASIn133omFeNxcXtvsENlnv008KYbdPPzYAsfnRdT+ahNpkuU8/OYRVPr28XnySciGibH3t+0Lk29vmojCbt29d97E8XzaFFJvNl657qBPn9T6f4f7VljH+9S2P4c2iFe3Lb5lKbX7r+4hW8y3jYtgwotUcjW9LRrQa51WFsGZEK/mmXIqNdS5h0jp13Z86+ZKaLe4tHBIpmyz1iTOIKmWhT9ymt+/f36z1idqEkwObMiz0Cft9/wMnB+fHvZU+oU3Jcg+XhNb5FNukLPdgSWidT/Fl+EPd8kd8MbrpS938+Xb8bODn/dufXfSldr59yrhzePlkl0/fK20+55xzzjnnnHPOOeecc87pLNPl0PIsp2T86FqexzEZewPL43GIwNLIEF33pX4SiHDWdXmpm1mYQEyIY2XI5AzRj5wh+pIzRF+SBZEqwmLX1GsnY6+MGl74Xie7MfhOdkNZbWVBkNVEzg3vxmq7WF4v1lPR4RnfZbYbO7iV7CZHwV2n7AU/MrlTXzvkRn3X+KipNd9zxY4pnZEMiEUUJvEOdOPNZRT6ruuH0fOKYT14YicvvJ3FW8lSfivm1x1sn9Ptj7zXZPoLXycQt578rnjHYZTREODT7d5lMcTclxaHwS2e4v1jwLe40ZrudxlI+7nRMlbg2j1aXCLEIZAaQwhccIYJxJXyzngFtPDVhiIGsQ2V11oQLhyXTCL6gh6JnlAVIm51TXIgyDRSe1IOMcmFuA3ELuUQgY8JY52IQ7e4T08BHCsI8fRSiNglDzsQXBKyfPT4y4ELX3pgAR6En+FCCJce1AedsCmMBEEcfuPjXpdDhDdJFaCXMLi8i1+hGOFeQIST8Xg1xE5G8Q3iKs54AR1yn/DFClpc8tPsDgshvGlSjKYrEXx3RDu34+djMNCCSAbOLR4B6gFZefSkc4h4a5wnV3wZZwQNuEtRCUmA7+FvLIRIDioyZ83h1j28eEBRx6LWaUAQEibkRFxbAQHVFvbweDUeSUd1OHiITkW0mxoQ4jvjaCC9EYaEv4adw20lCLztc5+IdLSVCrHziiDgdXAgUTIcq0CgBuGcFVg80B2gsA7pQmAX/QX9LhYg6O/xldjlQODZm+P+/FRoQ5AJ+vtAp1g8UPwCu+jrQIgFAHbR37Op0M+AwLdwSVMQ7OztCI73sAQivca4o6Oanx84hXHLO086afkQ/v5mhonbRZvDUR5EXElcHLq8zRTEDI9I5MuVAxGu6TFnK3GSl9gZ0dYD7kUc6bQWzRM+WwDsOMQ2E8Lf7m7m+Lgh2uZADOHsPZN4wTBArfIhBmyJEfE5gOxwVAcOuxA4OuPu4kAJDqUQLGEJxMD3Qj/+IvCSYpGCeIAhMWJvYMuY4hmbjT/23kE04y/phEVYpfX4/F8G4ZVBsATJmFQhaInEcjZE7ytAkH04UMoQzEfwMlUO83WiU/4vXYiHffaVwLMXuEkNA99zdaIHfbxmwx9lcsVSj8DYgyFBpy4x/+tUp0IIvlgKPCGyCnHFzh7rOQ5HverEVgozwbBiQ4LtH9faUghxAFpic6pTvG2KJSRRVIag5yxuGoKD4lAI4SShU4R7lewEIyEIsKmtn+xfYbJT5omdgBC9y56x6Zvh2GKUTYkWBJ0i6IqZbaG3JZcPkMEg6bH+smMoQ6wkCL4s44sZFYLdFyQQ6LQOBF5fby1NfPx8BKw1Pv/rQNzJaydcVsNyTIagwi2yIFK3TjhlaK1iVzCqxVzg8KMoCbQhaLVmo4hNccRRIHZKsZAgWIFhM2fosrGjA4HNRytpy5L6RUOHIX5bDwLfTavCWAw2GWIlLRFViAktCmsauriYJBAi6epEtuzyS8Fzf5jQplBTuhbSg5ixnvODof16EPR2iXcDkeB2iUK4+znNLn0lCPHxvlG+EPQgI37n5zE1dSEIauDfbkeHpJgqOmH78wwImJ74/ZzDfyDFIQbsljpedimTnfe4ZIPYFzfaj4sRLym0LRwgIayqtCDYtYVnB/TZAF3EHY2J6yMIevaSe3oSMJOnyg86w23qaYc7dJQdAGdPb+9FU8/JPbMWRDx3Susp/yANcelK8EoiQ9CFWvLkj9o4qgERoJjJ1EdGIb/6mU8APbjCKgS5ilz6Mz43eqYLY/IQwsMVhJg+ghUeh4AGQoS4hH08Rxx5D9/yntgb/ESn51De4F3fKTvgwyP8xkg0hU2ElzkQs+FisRiuZIiYYrc8XMY5LG/4ymYO+12zzuHX7PnWDTaAsxR+JRY/sV6wYbEn0+uFlOENGQ2VDRNH2UHkepy0tebHL3gq7qjJezztHL9HepFuSlTQVPT/HWS6rRwI63KG6EvOEH3JGaIvUSD+H37Lxl2OLA3c7/Bf2nLTyxVbwu7ZKIRWuu5xRiSIYKH1u5uZC7MmmTfKPo6kk7/teoDWDdzZAAQ8lIjGVtZYsoDbo8dp6oG/VaEPqPwhYXfu4cg+CsKfikHwWYAQyrC0bTaKMkXsZ+iyUHfHN4dZhepajvqKZYn/oT8hJP95/8Fc3v9OG0WZwiEDQ6HYjTiZR0e1uH4idvP+/uM7c/n4V5KWCbIVP8LIeg7cIPwJxPt3fzGWd/8gxzJxoVz2UGkclfatS4jP/82S6Uio/dFz9D5B5MjUolDmIbhM+DtK0UqtWopQxv5diHEIVaZFqvS2I5RxiAKZhFBsyuO/ftg7iEKZ2hLKMESxTG0JZRiiRKZEqKnJCmUWolSmI6GMTHlGIcplakcooxAaMgmhPINCmYTQkqkNoQxCfP4nbWpXKFMbQhmE0JSpBaHMQQiZ4IeyRTIdCdV4yjMGwStTuUzmhTIGoch0WcJAyNqkUKYgKsl0JFTDCmUIQq1M83IGo0IZgqgoE8TgGsoMBJfpWlcms0IZgaguk1mhjEDUkEkIZaJCmYBQZRprQxgTygCEKtNen4E9Kd82FsoARE2ZIIamvOYQ736vKZM5oRpDxDKRejJBzAjVGILLNKguE8SIUE0hGskEMSFUQ4hmMkHolMeEmtcTqiFEQ5kg6+ZrqGYQikxeDZkgzYVqBNFcJohSoWoJ1QhCkelQk8FAhWoC0bgy8aBQt/WFagBhRiZI0wrVAMKQTJCGQtWH4DItm8oEaSZUbQhFJm9U3s/CNBOqNoRBmSCNhKoLoco0Le9lWZoIVRPCrEyQJkLVhPj4t0Qmt7lMkAZC1YNQZPIMyASpL1QtiM//ojLdGJMJUl+oWhCsMjkGZYLUFqoORCsyQeoKVQNCkSk0+Qu7dYWqAcEqk2mZIDWFqg7RmkwQWaiVtlCVIdqTCVJPKPb5WvoQLcoEqSVUVYhWZYLUEaqiTuo018Y/JagjVMUrwWWCj4SIz1cbqSFUNYjWZYJUF6oSRPsyQaoLVQlCyDRoTSZIZaGqQJxEJkhVoSpAqDKt22Mg03AgPmRGR6gKECeSCVJRKH2Ik8kEqSaUNsTpZILQCqUrlDbECWWCSEKRUqF0IbhMT6eQCVJFKE2I08oEUYRaFAulCaHI9HwChkoVSg9ClikITyATRF8oLYjTywRRprxCobQguEzu6WSCKEI9FAilA/Hu3x3IBLl1+Qd2FQulAcFlmqFMk9MxaAulAcFkusPKdHVCBiZUyKa8fKHKIVSZ7k4KoSlUKUR3MkH0prxSiA5lgihC5U15ZRBCJrcDmSA6QpVAdCsTREeoEgguk9uNTBCNClUMocjkdyATpFyoQojPf+9aJkj5lFcI0QOZIKVCFUH0QiZImVAFEP2QCVImVAFET2SCgFBBvlD5ELJMgy5lghQLlQshZPK6lglSLFQuhCLTU/lhWk6hUHkQvZIJUiRUDoQiU9SHz+8rWkPlQPRMJggV6i5LqGwIRSa3BzJB8oXKhFCmuV7IBMmvUJkQXCY/6I1MELqGyhAqC0KRKeiJTJDnHKEyILhMk95UJh4q1ORIqAwIIRPMEP2RCZJToY4heisTBIW6Sgt1BNFfmSDZQh1B9FgmSKZQaQguE/6RANf0ZxwayG2GUCkIVaab8jZPHlxDRapQKQh5muuhTJAMoVQIRaaghzJBjiuUAtF/mSBKhcJPMFIguExhgH9sr685EkqGkGUKBj2VCZIWSoKwQyZIesqTIJTK1F+ZICmhEghrZIKoQiUQ1sgEmXpyhXrkEJZUJh5FqIBDfJBl6rqLGpGF2rFL8sGRZNqVt9F5FKHYH2FyrJIJgkL5vPuO+J89MkEkoaRYJBNkCtokf0CNMVCZrrvunHakCpVAWCUT5Fgoy2SCyGsoO2WCyBXKTpkgqlAWygRRhLJSJogy5bE/B21fEqHY5xPZJhNErKGYTMPyt/QwXCi8JlbKBHmmf27dXpkgtEJt8U/P2ikTBK8BPMW3VibIM/s7v9bKBMFFudUyQVAoq2WCgFC6nxjc28RClX6Wef+zjmyXCXKwXSbICR4e/w+JZQgaoFNNwQAAAABJRU5ErkJggg=="
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Ceara X Fortaleza</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Ceará: {count}
        </button>
        <button onClick={numPositivo}>- </button>
        <div className="card2">
          <button
            onClick={() => setCount2((count2) => count2 + 1)}
            onAuxClick={() => setCount2((count2) => count2 - 1)}
          >
            Fortaleza: {count2}
          </button>
          <button onClick={numPositivo}>-</button>
        </div>
      </div>
      <Modal img=""/>
    </>
  );
}

export default App;