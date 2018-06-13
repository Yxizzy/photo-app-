export default {
MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "users-default-photos"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://en8anrkoab.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_irXxSt4FN",
    APP_CLIENT_ID: "hoco16eov616ga2m31uclmiu1",
    IDENTITY_POOL_ID: "us-east-1:f66e280b-b098-4670-bf6d-57d651114704"
  }
};