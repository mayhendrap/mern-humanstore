import { makeStyles } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const useStyles = makeStyles({
    appBar: {
        borderBottom: "1px solid #f5f5f5",
        backgroundColor: "#fff",
        padding: "0.1rem 0"
    },
    wrapperHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    auth: {
        textDecoration: "none",
    },
    storeName: {
        textDecoration: "none",
        color: grey[800]
    },
    rightHeader: {
        display: "flex",
        alignItems: "center"
    },
    profile: {
        display: "flex",
        alignItems: "center",
    },
    userName: {
        color: grey[800],
        fontSize: "16px",
        marginLeft: "1rem",
    },
    avatar: {
        marginLeft: "1rem",
        cursor: "pointer",
    },
    menuDropdown: {
        "& .MuiMenu-paper": {
            borderRadius: "3px",
            marginTop: "40px"
        }
    },
    cartWrapper: {
        display: "flex",
        position: "relative",
        marginRight: "1rem"
    },
    cartLogo: {
        color: grey[800]
    },
    countCart: {
        fontSize: "15px",
        position: "absolute",
        right: "0",
        top: "0",
        backgroundColor: grey[700],
        color: "#fff",
        padding: "0.5px 6px",
        borderRadius: "70%"
    },
}, {index: 1})

export default useStyles