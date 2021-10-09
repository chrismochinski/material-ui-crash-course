import { makeStyles } from '@material-ui/core/styles';

/**
 * THE FOLLOWING is //important:
 * creating hook called useStyles = a function call called makeStyles
 * inside that function call, we pass in a callback function that simply, immediateley
 * returns an object which contains AAALLL the styles!
 */
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px'
    },
    button: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'             //20 top and bottom, 0 left and right
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',        //aspect ration of 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px'
    }
}))

export default useStyles;