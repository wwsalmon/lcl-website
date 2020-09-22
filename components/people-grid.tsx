export default function PeopleGrid({data}: {
    data: {
       name: string,
       headshot: string,
       label: string
    }[]
}) {
    return (
        <div className="grid sm:grid-cols-2 gap-8">
            {data.map(x => (
                <div className="flex items-center">
                    <img src={x.headshot} alt={`Headshot of ${x.name}`} className="w-20 h-20 rounded-full mr-4"/>
                    <div>
                        <h3 className="font-bold">{x.name}</h3>
                        <p className="opacity-50 text-sm">{x.label}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}