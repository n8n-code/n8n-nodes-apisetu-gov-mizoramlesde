import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovMizoramlesdeApi implements ICredentialType {
        name = 'N8nDevApisetuGovMizoramlesdeApi';

        displayName = 'Apisetu Gov Mizoramlesde API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovMizoramlesde/apisetu-gov-mizoramlesde.svg', dark: 'file:../nodes/ApisetuGovMizoramlesde/apisetu-gov-mizoramlesde.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/mizoramlesde/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/mizoramlesde/v3',
                        description: 'The base URL of your Apisetu Gov Mizoramlesde API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
