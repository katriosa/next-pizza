import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Filters */}
          <div className="w-[250px] hidden lg:block">
            <Filters />
          </div>

          {/* Products List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Pepperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 9.99 }],
                  },
                  {
                    id: 2,
                    name: "Carbonara",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 3.5 }],
                  },
                  {
                    id: 3,
                    name: "Pesto",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 4 }],
                  },
                  {
                    id: 4,
                    name: "Pepperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 9.99 }],
                  },
                  {
                    id: 5,
                    name: "Carbonara",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 3.5 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Combos"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Pepperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 9.99 }],
                  },
                  {
                    id: 2,
                    name: "Carbonara",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 3.5 }],
                  },
                  {
                    id: 3,
                    name: "Pesto",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 4 }],
                  },
                  {
                    id: 4,
                    name: "Pepperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 9.99 }],
                  },
                  {
                    id: 5,
                    name: "Carbonara",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 3.5 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Snacks"
                categoryId={3}
                items={[
                  {
                    id: 1,
                    name: "Pepperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 9.99 }],
                  },
                  {
                    id: 2,
                    name: "Carbonara",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 3.5 }],
                  },
                  {
                    id: 3,
                    name: "Pesto",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 4 }],
                  },
                  {
                    id: 4,
                    name: "Pepperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 9.99 }],
                  },
                  {
                    id: 5,
                    name: "Carbonara",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 3.5 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Cocktails"
                categoryId={4}
                items={[
                  {
                    id: 1,
                    name: "Pepperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 9.99 }],
                  },
                  {
                    id: 2,
                    name: "Carbonara",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 3.5 }],
                  },
                  {
                    id: 3,
                    name: "Pesto",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 4 }],
                  },
                  {
                    id: 4,
                    name: "Pepperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 9.99 }],
                  },
                  {
                    id: 5,
                    name: "Carbonara",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 3.5 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Drinks"
                categoryId={5}
                items={[
                  {
                    id: 1,
                    name: "Pepperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 9.99 }],
                  },
                  {
                    id: 2,
                    name: "Carbonara",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 3.5 }],
                  },
                  {
                    id: 3,
                    name: "Pesto",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 4 }],
                  },
                  {
                    id: 4,
                    name: "Pepperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 9.99 }],
                  },
                  {
                    id: 5,
                    name: "Carbonara",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:584x584/11eef6779b74fd6c89f36f97f6eb27ca.avif",
                    items: [{ price: 3.5 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
