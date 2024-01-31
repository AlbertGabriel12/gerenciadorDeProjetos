import BoxTabs from "./components/BoxTabs/BoxTabs"

import CardAccepted from "./components/CardAccepted/CardAccepted"
import CardInvited from "./components/CardInvited/CardInvited"

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
      <BoxTabs
        listaTab={["Invited", "Accepted"]}
        listaConteudoTabPanel={[
          {
            indexTab: "0",
            element: <CardInvited />,
          },

          {
            indexTab: "0",
            element: <CardInvited />,
          },

          {
            indexTab: "1",
            element: <CardAccepted />,
          }
        ]}
      />
    </div>
  )
}

export default App