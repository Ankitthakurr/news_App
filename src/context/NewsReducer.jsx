const NewsReducer = (state, action) => {
    switch (action.type) {
        case "GETDATA": {
            return {
                ...state,
                allnews: action.payload,
            }

        }
        case "Input": {
            return {
                ...state,
                input: action.payload,
            }
        }
        case "GETWEATHER": {
            return{
                ...state,
                weather : action.payload
            }
        }
       

        default:
            return { ...state }
    }

}
export default NewsReducer