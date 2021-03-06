import { StackProps } from 'aws-cdk-lib'
import { DynamoWebsocketOptions } from './websocket'

export interface PollStackProps extends StackProps, DynamoWebsocketOptions {
}
