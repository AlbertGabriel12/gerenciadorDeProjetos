import styles from "./styleCardInvited.module.css"

import { Avatar, Button } from "@mui/material"

import { GiPositionMarker } from "react-icons/gi";
import { PiSuitcaseSimple } from "react-icons/pi";

export default function CardInvited() {
    return (
        <div className={styles.container}>
            <div style={{ display: "flex", alignItems: "center", paddingLeft: 14, paddingTop: 24, paddingBottom: 12, borderBottom: "2px solid rgba(0,0,0, .1)" }}>
                <Avatar sx={{ bgcolor: "#ff7a0e", width: 48, height: 48, marginRight: 2, fontSize: 18 }}>B</Avatar>
                <div>
                    <h4 style={{ margin: 0 }}>Bill</h4>
                    <span>
                        January 4 @ 1:15pm
                    </span>
                </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", padding: 14, borderBottom: "2px solid rgba(0,0,0, .1)" }}>
                <GiPositionMarker size={24} />
                <span>Yanderra 2574</span>

                <PiSuitcaseSimple style={{ marginLeft: 14 }} size={24} />
                <span>Painters</span>

                <span style={{ marginLeft: 14 }}>
                    Job ID: 5577421
                </span>
            </div>

            <div style={{ paddingLeft: 24, paddingTop: 12, paddingBottom: 14, borderBottom: "2px solid rgba(0,0,0, .1)" }}>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </span>
            </div>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 18, paddingTop: 4, paddingBottom: 4 }}>
                <Button sx={{ color: "#fff", textTransform: "none" }} variant="contained">Accept</Button>
                <Button color="secondary" sx={{ textTransform: "none", marginLeft: 2 }} variant="contained">Decline</Button>
                <h4 style={{ marginLeft: 14 }}>
                    $64.00
                </h4>
                <span style={{ marginLeft: 8 }}>Lead Invitation</span>
            </div>
        </div >
    )
}