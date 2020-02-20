import AWS from "./aws-sdk";
import config from "../config";

console.dir(config);

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export function call(action, params) {
  console.log('TableName: ', `gacf-${config.resourcesStage}-${params.TableName}`);
  // Parameterize table names with stage name
  return dynamoDb[action]({
    ...params,
    TableName: `gacf-${config.resourcesStage}-${params.TableName}`
  }).promise();
}
