import styles from "./styleCardAccepted.module.css"

import { Avatar } from "@mui/material"

import { GiPositionMarker } from "react-icons/gi";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export default function CardAccepted() {
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

                <span style={{ marginLeft: 14 }}>
                    $26.00 Lead Invitation
                </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", paddingLeft: 24, paddingTop: 12, paddingBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <FiPhone size={22} />
                    <a style={{ marginLeft: 4, color: "#ff7a0e", fontWeight: 600, textDecoration: "none" }} href="tel:+5582994298490">(82) 99429-8490</a>

                    <MdOutlineMail style={{ marginLeft: 16 }} size={22} />
                    <a style={{ marginLeft: 4, color: "#ff7a0e", fontWeight: 600, textDecoration: "none" }} href="mailto:fake@mailnator.com">fake@mailnator.com</a>
                </div>

                <span style={{ maxWidth: "100%", marginTop: 8, marginRight: 8, wordWrap: "break-word" }}>
                    Plaster exposed brick walls (see photos), square off 2 archways
                    (see photos), and expand pantry (see photos) dasdasdasfds
                    async function adsfasdfasdfasdf(params:type) {

                    }
                </span>

            </div>
        </div >
    )
}