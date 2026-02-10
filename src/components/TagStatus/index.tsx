import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Status } from '@/types/Status'

type Props = {
    status: Status
}

export function TAgStatus({status}: Props) {
  return (
    <View style={[
        styles.container,
        styles[status === Status.APPROVED ? "approved" 
            : status === Status.DRAFT ? "draft"
            : status === Status.REJECTED ? "rejected"
            : "sent"]
    ]}>
        <View 
            style={[
                styles.bullet,
                styles[status === Status.APPROVED ? "bulletApproved" 
                    : status === Status.DRAFT ? "bulletDraft"
                    : status === Status.REJECTED ? "bulletRejected"
                    : "bulletSent"]
            ]}
        />
        <Text style={[
            styles.text, 
            styles[status === Status.APPROVED ? "textApproved" 
                : status === Status.DRAFT ? "textDraft"
                : status === Status.REJECTED ? "textRejected"
                : "textSent"]
        ]}>
        {status === Status.APPROVED ? "Aprovado" 
        : status === Status.DRAFT ? "Rascunho"
        : status === Status.REJECTED ? "Recusado"
        : "Enviado"
        }
      </Text>
    </View>
  )
}

