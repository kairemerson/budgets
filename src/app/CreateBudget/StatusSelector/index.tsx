import { Status } from '@/types/Status'
import { useState } from 'react'
import { StatusOption } from '../StatusOption'
import { TAgStatus } from '@/components/TagStatus'
import { View } from 'react-native'
import { styles } from './styles'

type Props = {
  value: Status
  onChange: (status: Status) => void
}

export function StatusSelector({onChange, value}: Props) {

  return (
    <View style={styles.container}>
        <View style={styles.item}>
            <StatusOption
                checked={value === Status.DRAFT}
                onPress={() => onChange(Status.DRAFT)}
                tag={<TAgStatus status={Status.DRAFT}/>}
            />
        </View>

        <View style={styles.item}>
            <StatusOption
                checked={value === Status.APPROVED}
                onPress={() => onChange(Status.APPROVED)}
                tag={<TAgStatus status={Status.APPROVED}/>}
            />
        </View>

        <View style={styles.item}>
            <StatusOption
                checked={value === Status.SENT}
                onPress={() => onChange(Status.SENT)}
                tag={<TAgStatus status={Status.SENT}/>}
            />
        </View>

        <View style={styles.item}>
            <StatusOption
                checked={value === Status.REJECTED}
                onPress={() => onChange(Status.REJECTED)}
                tag={<TAgStatus status={Status.REJECTED}/>}
            />
        </View>
    </View>
  )
}
