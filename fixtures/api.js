module.exports = {
  "api": {
    "key": "aaaaaaaa-bbbb-cccc-dddd-1234567890ab",
    "secret": "cbbbbbbb-aaaa-cccc-dddd-1234567890ab"
  },
  "invalidCredentials": {
    "error": {
      "reference": "26279bfe-c7e1-4b12-a680-26119d8f5062",
      "code": 813
    }
  },
  "ping": {
    "pong": {
      "pong": true,
      "auth": {
        "quota": {},
        "application": {
          "uuidv4": "00000000-0000-4839-af2f-f794874a80b0",
          "name": "SomeApplication",
          "webhookurl": "https://webhook.site/00000000-0000-4e34-8112-c4391247a8ee",
          "disabled": 0
        },
        "call": {
          "uuidv4": "2904b05f-5b37-4f3e-a624-940ad817943c"
        }
      }
    }
  },
  "storage": {
    "getResponse": {
      "application": {
        "name": "SomeApplication",
        "uuidv4": "00000000-0000-4839-af2f-f794874a80b0"
      },
      "data": {
        "some": "other_data"
      }
    },
    "deleteResponse": {
      "application": {
        "name": "SomeApplication",
        "uuidv4": "00000000-0000-4839-af2f-f794874a80b0"
      },
      "stored": true,
      "data": null
    },
    "setResponse": {
      "application": {
        "name": "SomeApplication",
        "uuidv4": "00000000-0000-4839-af2f-f794874a80b0"
      },
      "stored": true,
      "data": {
        "name": "Wietse"
      }
    }
  },
  "payload": {
    "created": {
      "uuid": "00000000-0000-4839-af2f-f794874a80b0",
      "next": {
        "always": "http://localhost:3001/sign/00000000-0000-4839-af2f-f794874a80b0"
      },
      "refs": {
        "qr_png": "http://localhost:3001/sign/00000000-0000-4839-af2f-f794874a80b0_q.png",
        "qr_matrix": "http://localhost:3001/sign/00000000-0000-4839-af2f-f794874a80b0_q.json",
        "qr_uri_quality_opts": ["m", "q", "h"],
        "websocket_status": "ws://local"
      },
      "pushed": false
    },
    "cancelled": {
      "result": {
        "cancelled": true,
        "reason": "OK"
      },
      "meta": {
        "exists": true,
        "uuid": "00000000-0000-4839-af2f-f794874a80b0",
        "multisign": false,
        "submit": false,
        "destination": "",
        "resolved_destination": "",
        "resolved": false,
        "signed": false,
        "cancelled": false,
        "expired": true,
        "signers": null,
        "pushed": false,
        "app_opened": false,
        "opened_by_deeplink": false,
        "return_url_app": "https://xumm.dev/beta/test?payloadId=00000000-0000-4839-af2f-f794874a80b0&customIdent=&txid=&hex=",
        "return_url_web": "https://xumm.dev/beta/test?payloadId=00000000-0000-4839-af2f-f794874a80b0&customIdent=&txid=&hex=",
        "is_xapp": false
      },
      "custom_meta": {
        "identifier": null,
        "blob": {
          "location": "Amersfoort"
        },
        "instruction": null
      }
    },
    "get": {
      "meta": {
        "exists": true,
        "uuid": "00000000-0000-4839-af2f-f794874a80b0",
        "multisign": false,
        "submit": false,
        "destination": "",
        "resolved_destination": "",
        "resolved": true,
        "signed": true,
        "cancelled": false,
        "expired": true,
        "signers": ["rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY", "rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDZ"],
        "pushed": false,
        "app_opened": true,
        "opened_by_deeplink": true,
        "pathfinding": false,
        "return_url_app": "https://xumm.dev/beta/test?payloadId=00000000-0000-4839-af2f-f794874a80b0&customIdent=&txid=9B124C14528ED14C0BDA17075A39B90ABED598B77A22DFEEBD913CAC07A513BC&hex=1200032280000000240000003241833237B8665D2F4E00135E8DE646589F68400000000000000C732103709723A5967EAAED571B71DB511D87FA44CC7CDDF827A37F457A25E14D862BCD74473045022100C6A6999BD33153C6A236D78438D1BFEEEC810CFE05D0E41339B577560C9143CA022074F07881F559F56593FF680049C12FC3BCBB0B73CE02338651522891D95886F981146078086881F39B191D63B528D914FEA7F8CA2293F9EA7C06636C69656E747D15426974686F6D7020746F6F6C20762E20302E302E337E0A706C61696E2F74657874E1F1",
        "return_url_web": "https://xumm.dev/beta/test?payloadId=00000000-0000-4839-af2f-f794874a80b0&customIdent=&txid=9B124C14528ED14C0BDA17075A39B90ABED598B77A22DFEEBD913CAC07A513BC&hex=1200032280000000240000003241833237B8665D2F4E00135E8DE646589F68400000000000000C732103709723A5967EAAED571B71DB511D87FA44CC7CDDF827A37F457A25E14D862BCD74473045022100C6A6999BD33153C6A236D78438D1BFEEEC810CFE05D0E41339B577560C9143CA022074F07881F559F56593FF680049C12FC3BCBB0B73CE02338651522891D95886F981146078086881F39B191D63B528D914FEA7F8CA2293F9EA7C06636C69656E747D15426974686F6D7020746F6F6C20762E20302E302E337E0A706C61696E2F74657874E1F1",
        "is_xapp": false
      },
      "application": {
        "name": "SomeApp",
        "description": "SomeDesc",
        "disabled": 0,
        "uuidv4": "00000000-1111-2222-af2f-f794874a80b0",
        "icon_url": "https://xumm-cdn.imgix.net/app-logo/00000000-1111-2222-9abc-bf0a7cf9f5cc.png",
        "issued_user_token": null
      },
      "payload": {
        "tx_type": "SignIn",
        "tx_destination": "",
        "tx_destination_tag": null,
        "request_json": {
          "TransactionType": "SignIn",
          "SignIn": true
        },
        "origintype": "QR",
        "signmethod": "TANGEM",
        "created_at": "2020-05-03T19:28:21Z",
        "expires_at": "2020-05-03T19:38:21Z",
        "expires_in_seconds": -11557255
      },
      "response": {
        "hex": "ABCDEF123456789",
        "txid": "ABCDEF123456789",
        "resolved_at": "2020-05-03T17:28:40.000Z",
        "dispatched_to": "wss://xrplcluster.com",
        "dispatched_result": "tes_SUCCESS",
        "dispatched_nodetype": "MAINNET",
        "multisign_account": "rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY",
        "account": "rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY"
      },
      "custom_meta": {
        "identifier": "some-id",
        "blob": {
          "country": "Netherlands"
        },
        "instruction": "Hey ❤️! Please sign for\n\nThis\nThat 🍻"
      }
    },
    "error": {
      "error": {
        "reference": "a61ba59a-0304-44ae-a86e-d74808bd5190",
        "code": 602
      }
    },
    "notfound": {
      "error": {
        "reference": "a61ba59a-0304-44ae-a86e-d74808bd5190",
        "code": 404
      }
    }
  },
  "rates": {
    "BTC": {
      "USD": 0.000025,
      "XRP": 0.000018,
      "__meta": {
        "currency": {
          "en": "BTC",
          "code": "BTC",
          "symbol": "BTC",
          "isoDecimals": 4
        }
      }
    },
    "USD": {
      "USD": 1,
      "XRP": 0.7125,
      "__meta": {
        "currency": {
          "en": "US Dollar",
          "code": "USD",
          "symbol": "$",
          "isoDecimals": 2
        }
      }
    },
    "EUR": {
      "USD": 0.888299,
      "XRP": 0.632913,
      "__meta": {
        "currency": {
          "en": "Euro",
          "code": "EUR",
          "symbol": "€",
          "isoDecimals": 2
        }
      }
    }
  },
  "curatedAssets": {
    "issuers": [
      "Bitstamp",
      "Wietse"
    ],
    "currencies": [
      "USD",
      "BTC",
      "ETH",
      "WIE"
    ],
    "details": {
      "Bitstamp": {
        "id": 185,
        "name": "Bitstamp",
        "domain": "bitstamp.net",
        "avatar": "https://xumm.app/assets/icons/currencies/ex-bitstamp.png",
        "shortlist": 1,
        "currencies": {
          "USD": {
            "id": 178,
            "issuer_id": 185,
            "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
            "currency": "USD",
            "name": "US Dollar",
            "avatar": "https://xumm.app/assets/icons/currencies/fiat-dollar.png",
            "shortlist": 1
          },
          "BTC": {
            "id": 492,
            "issuer_id": 185,
            "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
            "currency": "BTC",
            "name": "Bitcoin",
            "avatar": "https://xumm.app/assets/icons/currencies/crypto-btc.png",
            "shortlist": 1
          }
        }
      },
      "Wietse": {
        "id": 17553,
        "name": "Wietse",
        "domain": "wietse.com",
        "avatar": "https://xumm.app/assets/icons/currencies/wietse.jpg",
        "shortlist": 0,
        "currencies": {
          "WIE": {
            "id": 17552,
            "issuer_id": 17553,
            "issuer": "rwietsevLFg8XSmG3bEZzFein1g8RBqWDZ",
            "currency": "WIE",
            "name": "Wietse",
            "avatar": "https://xumm.app/assets/icons/currencies/transparent.png",
            "shortlist": 0
          }
        }
      }
    }
  },
  "kycStatus": {
    "accountId": "some-account-id",
    "kycStatus": "IN_PROGRESS",
    "possibleStatuses": {
      "NONE": "No KYC attempt has been made",
      "IN_PROGRESS": "KYC flow has been started, but did not finish (yet)",
      "REJECTED": "KYC flow has been started and rejected (NO SUCCESSFUL KYC)",
      "SUCCESSFUL": "KYC flow has been started and was SUCCESSFUL :)"
    }
  },
  "xrplTx": {
    "txid": "A17E4DEAD62BF705D9B73B4EAD2832F1C55C6C5A0067327A45E497FD8D31C0E3",
    "balanceChanges": {
      "r4bA4uZgXadPMzURqGLCvCmD48FmXJWHCG": [
        {
          "counterparty": "",
          "currency": "XRP",
          "value": "-1.000012"
        }
      ],
      "rPdvC6ccq8hCdPKSPJkPmyZ4Mi1oG2FFkT": [
        {
          "counterparty": "",
          "currency": "XRP",
          "value": "1"
        }
      ]
    },
    "node": "wss://xrplcluster.com",
    "transaction": {
      "Account": "r4bA4uZgXadPMzURqGLCvCmD48FmXJWHCG",
      "Amount": "1000000",
      "Destination": "rPdvC6ccq8hCdPKSPJkPmyZ4Mi1oG2FFkT",
      "Fee": "12",
      "Flags": 2147483648,
      "Sequence": 58549314,
      "SigningPubKey": "0260F06C0590C470E7E7FA9DE3D9E85B1825E19196D8893DD84431F6E9491739AC",
      "TransactionType": "Payment",
      "meta": {
        "TransactionIndex": 0,
        "TransactionResult": "tesSUCCESS",
        "delivered_amount": "1000000"
      },
      "validated": true
    }
  },
  "xApp": {
    "get": {
      "account": "r...",
      "accountaccess": "FULL",
      "accounttype": "REGULAR",
      "locale": "en",
      "style": "LIGHT",
      "version": "1.0.1"
    },
    "push": {
      "pushed": true
    },
    "event": {
      "pushed": true,
      "uuid": "19dd8a5b-e167-49a1-8f21-50f0254c55ef"
    }
  },
  "verifyUserToken": {
    "tokens": [
      {
        "user_token": "691d5ae8-968b-44c8-8835-f25da1214f35",
        "active": true
      },
      {
        "user_token": "b12b59a8-83c8-4bc0-8acb-1d1d743871f1",
        "active": true
      },
      {
        "user_token": "51313be2-5887-4ae8-9fda-765775a59e51",
        "active": false
      }
    ]
  }
}
