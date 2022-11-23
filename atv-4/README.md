1. Stateless -> A comunicação cliente servidor deve ocorrer independente do estado, pois, não cabe ao servidor armazenar o contexto, assim, a requisição deve possuir toda a informação para total compreensão da mesma.

2. Cliente-servidor -> Define a separação de responsabilidades, as preocupações de o que o usuário vê são diferentes daquelas que o servidor necessariamente precisa. Ao fazer isso, é facilitado a evolução independente e simplificada das duas coisas.

3. Interface uniforme -> É a característica que diferencia a arquitetura REST das demais, define uma interface uniforme entre o cliente e o servidor, fazendo com que ambos a compartilhem. Existem quatro princípios que devem ser seguidos nessa regra: Identificação dos Recursos, Representação dos recursos, Mensagens auto-descritivas e Hypermedia.

4. Armazenamento em cache -> Ajuda a melhorar a escalabilidade, performance e eficiência. São controlados pelo servidor atráves de códigos HTTP.

5. Sistemas de camadas -> Define que a arquitetura deve ser construida através de camadas independentes, isso significa que, cada camada só pode ver o que a sua próxima possui, e a mudança de uma camada não deve implicar na mudança de outras camadas.

6. Código sob demanda -> É uma regra opcional e permite que certa funcionalidade do cliente seja estendida por meio de scripts ou applets baixados.
