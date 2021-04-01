import Card from '../interface/components/Card';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../interface/components/Layout';
import Topic from '../components/Topic';

export default function Home() {
  return (
    <>
      <Head>
        <title>Movielist - Home</title>
      </Head>
      <Layout>
        <Header />
        <div style={{ padding: '0 60px', marginTop: '9em' }}>
          <Topic title='Recommended to you' isVertical={true}>
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ26OFC37UCrjI22FC_DG57-JjmaPo6prMzIRB_aHB-XYm1dXLEDS7PfNDXOi81_Yemx5gCmAGBwtrzKAKzab_ciubB0Xt4FnnpK5SpsCJ57M7WK0OtOw3qj731g.jpg?r=ffd'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfv50J5yrR5Js0TsKd9SfPssvQHynmcMWOLnfFKKkpevAKH3lFJNmzFH1blVfSRm4fAyBNjjAHNqNmE3BIPL0oCok6U.webp?r=580'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS4xTk9WtReBoLfVUIxz7OTJBxgctBqHywjLW5sWaMPQ_mrMeqlLLuWoAvRSYPgnxRiMnlIg6QPqkqjZ7KPQchcEW0w.webp?r=03d'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABavRwYeWMygWEhjzdqKsAxUWdue-g8dgG8Oh_eieRIDCkoyu32OQopyQ43Kx7ezFUifJvxIkqg1S-3YtMBjer9D-xZw.webp?r=801'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbgA84BZrJVEp26HmvhG09PP7fymHU8cmkQg9dIacZzD0nWTsuWgaLPx7hgrtpvJ6E5k_gao_fuy4WiSpoRq2OVYPjA.webp?r=663'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUjsKDiaKwLmrV662pwmVKEtRmbJI-s8M9ojCqr2QEdnPUJPX86RP-n9IGXxGcaHWkTf-cwz5e4kBLN3jYLM7HuBfYA.webp?r=01d'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfmrhRnnsfuuep_z5DqQysJchci7vkn1nfdhfOeOQtgcgabCsfVfIrzjcYlli_ehiOtBh9OOrESCZlGIrWBFrvu8viA.webp?r=136'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR7VepvTTmAYCducZQzXlJVYso5J8mlkPZ6dW7PDDpnYOcVd3RhZbWAMV_HRcHK01ug-u1PP8b3t-RZBnoOWBYPWQsycDlTK6Vl_uieIQ13I-8pnzuAwiuT_zdm_.jpg?r=988'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSjLKshCSzk70u_FsK1NxNTbovlyxj7RXOa1vGonktHKw04Mf1moqZPnPEMjdHHoBET3OokoaJLAc-eUvp20cMueyvA.webp?r=ffe'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRJ7hu6hkOyhWakI_3KmvyG2P-XXbC0jNMNaRIPd6nZ_4v3Gqjw0W78NlH5caMPZn_zZTYBb2ZkHXgv8SROUSMuSSGY.webp?r=9d5'
              isVertical={true}
            />
          </Topic>
          <Topic title='Japanese Anime Series' isVertical={true}>
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY0vVnEso_nzZcXwNxbAkoFkv5B2vBqx663zVrhdSUICNQJehgAsHzANmkOhyaNzjGm_oItx_ITmTBlmdlgOMs9h7E4.webp?r=4e3'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfn4mW6hiSyrD5PKEvnJ_6Rt5Ag56kQ7kowSo3DgbDw-YwLaN3h1cwNnhsdlCamBfzQzg70XB81-TVvRRizTRnvD_fM.webp?r=931'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUsKVCSe96RA76-DdmokXko2jeBFMNflXVFolDlk9bMNBdCHvtIXGOGyf8-5-dqou5iQiARvPZQjeEbpEpylWyk2w8I.webp?r=060'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRn3uCmTUNKZyHrOXnbttTIHNIQKSlaRDaDaIrowI1vvO0rU3hsvGlSGjc8a0i1JCHToDC9FaIkICUHW3BpnbtZGRyk.webp?r=6c7'
              isVertical={true}
            />
            <Card image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZd8RORLiMH8-kT4AxAWdcG9IihchIr0TC-o2jePgHIGsgGuoNL5VZXr9EeoDBOptssDCUj_yP5awoPB_9xspkV5JGN2klNbA7O4U1xgLugO5ZIMv3yQfx5IJlQ1.jpg?r=886' />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABamvfU1teH-M4Xyb2WRAQBnJ2v5U-w9ch3axXrtmCQCEAm_j2MTIQLt3pC0LCuDj4-ZASVqD2Ygi4--lSRZZL7-3DEM.webp?r=190'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTRdQwAl7Ctld5AN15SgDY21Dd86az37XOmairG3-7mnmxNW0OBW7khgq_1a_BbZj60BVhBv36zMCipq-q5j068J8v4.webp?r=394'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbdu65EIEB6KPdsYj0d17wTRqlouFInAD8h-CwsHkOg9X7Yr9NSf6IelT2m2UQzRBZu6IYFotOap03VG3RtI4xXYPRA.webp?r=52e'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABepneYkKwCq7x1fI9iAu7PP2hEWySs1vhKI7A_MGUNauxWZpxff4B66P3koPIjy1y7glcojyZ_DuCWPSA9hF-WbMLWk.webp?r=6b6'
              isVertical={true}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABft4gt8PZUMqrXq38dbZCSKI3OzY5SvyU9aaFkuGpZy1MyLj7LWlkQQ7hemE5O12wgu43eA2t68bP756-Sci2QLvTiqPyd82NEIiIorEWTE-GEI7EcUuFJfWcO9E.jpg?r=cb7'
              isVertical={true}
            />
          </Topic>
          <Topic title='Highlight' isVertical={false}>
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABTOZtm2PoAJYXDfBJxBuXFrkvabPn4NS9SbDV5_RAPdd5SfHEJ_tHGxKjwtAJYclK0LxQq4ZMbw_4E9yJvNUje-ya-mxq24EktSSKiR9jGq3ARkCKN_-VeCosLpEz78tE-D-qGuSHiyVYRAgV1tiasM4dIOZicmmGPEdZfiTWAzyfgTNFOxdfs0f0Gnw1dmrQm7ondYW.webp?r=972'
              isVertical={false}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABcwy9dNCxboBEbpw1tXNS35MG3AROGlR9t8RUsoS7q1dGeJo4t28NsL_rMeLak5AYLKVudLNY_OF1JKroqc2J51FNwi0xH1TFCb1CVW4eNdIClAwkdCUrpA3MJDKP3ge-dVJaBme9t_y129hjplUjDXWu_9xqgO4rjKVDNcaY0p2M6uY7vs5cxV4Ohdutcmb2Yq_XrtK.webp?r=c59'
              isVertical={false}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABR0K-68TrxX0MGUkwgBuQlxI1j0lxfQLNbKe9OH1nUzsqLh-HTbeImjl0rv3RKms1UoBoGu7KNTKeLxUiLDn5J0WnWVKQAU7GgWFzvf-wg71qvqXTrDU6cnQ8rFNrSENjD9uEmZqmpbMoWkqXr31H_RC1LVS32QSeve3zgQYs8n7rhocVMh5O0wup_dw1h6YB1DvfkwQ.webp?r=a4a'
              isVertical={false}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABZ0PeEFEXiFOVbNhdm4n0hx9TePl3KXzxTCBL_ATnj8yEqRrgWv0DDg4ScSQHQ0oanuxCnOLjtJ7fsJdqxdoUha2zoOYHBEumCnknD-Ulg7GSyW4Vib_F5O9eg5rfcgf9U1tJO6tse09_oT3tM46etG8_GxRyIKXZLozEXOqO-ZcsSoPG4CTrqULHQott5j2Ee2BnE7s.webp?r=ce4'
              isVertical={false}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABUw9E0kUXcVZP01K_vjaxIN0ZQqkJALN6SB46g-QzDPLtOgnD2ufa2h9D0I1QiVznOdIGTwtsWDLWlF0ovDnqZfMjfCL6mlQYNWBA_X724JLXQtO_0pmCuG-2m0Tgd48Z3W2yGfd-8e77XNAAXwLuF-2QObf1xtClAKsBBYLsg3s304iYV8TmFe64nDLC6sp0G8rnAEcc7LAfFomCLs9vr3shmIkFKXJ6Mjk5LsEDg.webp?r=742'
              isVertical={false}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABTOZtm2PoAJYXDfBJxBuXFrkvabPn4NS9SbDV5_RAPdd5SfHEJ_tHGxKjwtAJYclK0LxQq4ZMbw_4E9yJvNUje-ya-mxq24EktSSKiR9jGq3ARkCKN_-VeCosLpEz78tE-D-qGuSHiyVYRAgV1tiasM4dIOZicmmGPEdZfiTWAzyfgTNFOxdfs0f0Gnw1dmrQm7ondYW.webp?r=972'
              isVertical={false}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABcwy9dNCxboBEbpw1tXNS35MG3AROGlR9t8RUsoS7q1dGeJo4t28NsL_rMeLak5AYLKVudLNY_OF1JKroqc2J51FNwi0xH1TFCb1CVW4eNdIClAwkdCUrpA3MJDKP3ge-dVJaBme9t_y129hjplUjDXWu_9xqgO4rjKVDNcaY0p2M6uY7vs5cxV4Ohdutcmb2Yq_XrtK.webp?r=c59'
              isVertical={false}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABR0K-68TrxX0MGUkwgBuQlxI1j0lxfQLNbKe9OH1nUzsqLh-HTbeImjl0rv3RKms1UoBoGu7KNTKeLxUiLDn5J0WnWVKQAU7GgWFzvf-wg71qvqXTrDU6cnQ8rFNrSENjD9uEmZqmpbMoWkqXr31H_RC1LVS32QSeve3zgQYs8n7rhocVMh5O0wup_dw1h6YB1DvfkwQ.webp?r=a4a'
              isVertical={false}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABZ0PeEFEXiFOVbNhdm4n0hx9TePl3KXzxTCBL_ATnj8yEqRrgWv0DDg4ScSQHQ0oanuxCnOLjtJ7fsJdqxdoUha2zoOYHBEumCnknD-Ulg7GSyW4Vib_F5O9eg5rfcgf9U1tJO6tse09_oT3tM46etG8_GxRyIKXZLozEXOqO-ZcsSoPG4CTrqULHQott5j2Ee2BnE7s.webp?r=ce4'
              isVertical={false}
            />
            <Card
              image='https://occ-0-1489-1490.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABUw9E0kUXcVZP01K_vjaxIN0ZQqkJALN6SB46g-QzDPLtOgnD2ufa2h9D0I1QiVznOdIGTwtsWDLWlF0ovDnqZfMjfCL6mlQYNWBA_X724JLXQtO_0pmCuG-2m0Tgd48Z3W2yGfd-8e77XNAAXwLuF-2QObf1xtClAKsBBYLsg3s304iYV8TmFe64nDLC6sp0G8rnAEcc7LAfFomCLs9vr3shmIkFKXJ6Mjk5LsEDg.webp?r=742'
              isVertical={false}
            />
          </Topic>
        </div>
      </Layout>
    </>
  );
}
