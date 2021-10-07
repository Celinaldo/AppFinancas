import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
    LogoutButton
} from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positivo',
            title: 'Desenvolvimento web',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: '12/04/2020',


        },
        {
            id: '2',
            type: 'negativo',
            title: 'Hamburgueria pizzy',
            amount: 'R$ 59,00',
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: '10/04/2020',
        },
        {
            id: '3',
            type: 'negativo',
            title: 'Aluguel do apartamento',
            amount: 'R$ 1.200,00',
            category: {
                name: 'Casa',
                icon: 'shopping-bag'
            },
            date: '10/04/2020',
        }
    ]
    return (
        <Container >
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://github.com/celinaldo.png' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Junior</UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => {}}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserWrapper>

            </Header>
            <HighlightCards>
                <HighlightCard
                    type="up"
                    title="Entrada"
                    amount="R$ 17.400,00"
                    lastTransaction="Ultima entrada dia 13 de abril" />
                <HighlightCard
                    type="down"
                    title="Saída"
                    amount="R$ 1.259,00"
                    lastTransaction="Ultima saída dia 06 de abril" />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 16 de abril" />

            </HighlightCards>
            <Transactions>
                <Title>Listagem</Title>
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}

                />

            </Transactions>
        </Container>
    )
}
