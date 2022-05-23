import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDE5OTZlNTNmYTUwM2JkOWI2Y2NhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzMxNTE2NCwiZXhwIjoxNjUzNTc0MzY0fQ.F2J9EsRBVx2nexEZE97TyTJh2WTbq8EJSvc127gE_5o"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const UuserRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
  });
  
//AFTER USİNG REDUX WE WİLL TAKE THİS STOREGE