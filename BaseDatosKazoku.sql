PGDMP                          {            kazoku    15.3    15.3 3    1           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            2           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            3           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            4           1262    16421    kazoku    DATABASE     |   CREATE DATABASE kazoku WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE kazoku;
                postgres    false            �            1259    16432    menu    TABLE     �   CREATE TABLE public.menu (
    id_menu integer NOT NULL,
    titulo character varying(20) NOT NULL,
    descripcion_general text NOT NULL,
    imagen text NOT NULL
);
    DROP TABLE public.menu;
       public         heap    postgres    false            �            1259    16431    menu_id_menu_seq    SEQUENCE     �   CREATE SEQUENCE public.menu_id_menu_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.menu_id_menu_seq;
       public          postgres    false    215            5           0    0    menu_id_menu_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.menu_id_menu_seq OWNED BY public.menu.id_menu;
          public          postgres    false    214            �            1259    16481    plato    TABLE     �   CREATE TABLE public.plato (
    id_plato integer NOT NULL,
    nombre character varying(50) NOT NULL,
    descripcion text NOT NULL,
    precio numeric NOT NULL,
    imagen text NOT NULL,
    id_menu integer NOT NULL
);
    DROP TABLE public.plato;
       public         heap    postgres    false            �            1259    16480    plato_id_plato_seq    SEQUENCE     �   CREATE SEQUENCE public.plato_id_plato_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.plato_id_plato_seq;
       public          postgres    false    223            6           0    0    plato_id_plato_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.plato_id_plato_seq OWNED BY public.plato.id_plato;
          public          postgres    false    222            �            1259    16462    registro_compra    TABLE     D  CREATE TABLE public.registro_compra (
    id_registro_compra integer NOT NULL,
    fecha_registro date NOT NULL,
    modalidad_entrega character varying(50) NOT NULL,
    pago_pedido_total numeric NOT NULL,
    metodo_pago character varying(50) NOT NULL,
    id_sucursal integer NOT NULL,
    id_usuario integer NOT NULL
);
 #   DROP TABLE public.registro_compra;
       public         heap    postgres    false            �            1259    16461 &   registro_compra_id_registro_compra_seq    SEQUENCE     �   CREATE SEQUENCE public.registro_compra_id_registro_compra_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public.registro_compra_id_registro_compra_seq;
       public          postgres    false    221            7           0    0 &   registro_compra_id_registro_compra_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public.registro_compra_id_registro_compra_seq OWNED BY public.registro_compra.id_registro_compra;
          public          postgres    false    220            �            1259    16495    registro_plato    TABLE     �   CREATE TABLE public.registro_plato (
    id_registro_plato integer NOT NULL,
    cantidad_plato integer NOT NULL,
    precio_final numeric NOT NULL,
    id_registro_compra integer NOT NULL,
    id_plato integer NOT NULL
);
 "   DROP TABLE public.registro_plato;
       public         heap    postgres    false            �            1259    16494 $   registro_plato_id_registro_plato_seq    SEQUENCE     �   CREATE SEQUENCE public.registro_plato_id_registro_plato_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.registro_plato_id_registro_plato_seq;
       public          postgres    false    225            8           0    0 $   registro_plato_id_registro_plato_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.registro_plato_id_registro_plato_seq OWNED BY public.registro_plato.id_registro_plato;
          public          postgres    false    224            �            1259    16441    sucursal    TABLE     �   CREATE TABLE public.sucursal (
    id_sucursal integer NOT NULL,
    nombre_barrio character varying(150) NOT NULL,
    direccion character varying(150) NOT NULL,
    telefono character varying(20) NOT NULL,
    correo character varying(250) NOT NULL
);
    DROP TABLE public.sucursal;
       public         heap    postgres    false            �            1259    16440    sucursal_id_sucursal_seq    SEQUENCE     �   CREATE SEQUENCE public.sucursal_id_sucursal_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.sucursal_id_sucursal_seq;
       public          postgres    false    217            9           0    0    sucursal_id_sucursal_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.sucursal_id_sucursal_seq OWNED BY public.sucursal.id_sucursal;
          public          postgres    false    216            �            1259    16455    usuario    TABLE     �   CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    nombre character varying(30) NOT NULL,
    apellido character varying(30) NOT NULL,
    direccion_casa character varying(150) NOT NULL,
    telefono character varying(20) NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            �            1259    16454    usuario_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuario_id_usuario_seq;
       public          postgres    false    219            :           0    0    usuario_id_usuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;
          public          postgres    false    218            ~           2604    16435    menu id_menu    DEFAULT     l   ALTER TABLE ONLY public.menu ALTER COLUMN id_menu SET DEFAULT nextval('public.menu_id_menu_seq'::regclass);
 ;   ALTER TABLE public.menu ALTER COLUMN id_menu DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    16484    plato id_plato    DEFAULT     p   ALTER TABLE ONLY public.plato ALTER COLUMN id_plato SET DEFAULT nextval('public.plato_id_plato_seq'::regclass);
 =   ALTER TABLE public.plato ALTER COLUMN id_plato DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    16465 "   registro_compra id_registro_compra    DEFAULT     �   ALTER TABLE ONLY public.registro_compra ALTER COLUMN id_registro_compra SET DEFAULT nextval('public.registro_compra_id_registro_compra_seq'::regclass);
 Q   ALTER TABLE public.registro_compra ALTER COLUMN id_registro_compra DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    16498     registro_plato id_registro_plato    DEFAULT     �   ALTER TABLE ONLY public.registro_plato ALTER COLUMN id_registro_plato SET DEFAULT nextval('public.registro_plato_id_registro_plato_seq'::regclass);
 O   ALTER TABLE public.registro_plato ALTER COLUMN id_registro_plato DROP DEFAULT;
       public          postgres    false    225    224    225                       2604    16444    sucursal id_sucursal    DEFAULT     |   ALTER TABLE ONLY public.sucursal ALTER COLUMN id_sucursal SET DEFAULT nextval('public.sucursal_id_sucursal_seq'::regclass);
 C   ALTER TABLE public.sucursal ALTER COLUMN id_sucursal DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    16458    usuario id_usuario    DEFAULT     x   ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);
 A   ALTER TABLE public.usuario ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    219    218    219            $          0    16432    menu 
   TABLE DATA           L   COPY public.menu (id_menu, titulo, descripcion_general, imagen) FROM stdin;
    public          postgres    false    215   =       ,          0    16481    plato 
   TABLE DATA           W   COPY public.plato (id_plato, nombre, descripcion, precio, imagen, id_menu) FROM stdin;
    public          postgres    false    223   �?       *          0    16462    registro_compra 
   TABLE DATA           �   COPY public.registro_compra (id_registro_compra, fecha_registro, modalidad_entrega, pago_pedido_total, metodo_pago, id_sucursal, id_usuario) FROM stdin;
    public          postgres    false    221   	B       .          0    16495    registro_plato 
   TABLE DATA           w   COPY public.registro_plato (id_registro_plato, cantidad_plato, precio_final, id_registro_compra, id_plato) FROM stdin;
    public          postgres    false    225   �B       &          0    16441    sucursal 
   TABLE DATA           [   COPY public.sucursal (id_sucursal, nombre_barrio, direccion, telefono, correo) FROM stdin;
    public          postgres    false    217   DC       (          0    16455    usuario 
   TABLE DATA           Y   COPY public.usuario (id_usuario, nombre, apellido, direccion_casa, telefono) FROM stdin;
    public          postgres    false    219   �C       ;           0    0    menu_id_menu_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.menu_id_menu_seq', 8, true);
          public          postgres    false    214            <           0    0    plato_id_plato_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.plato_id_plato_seq', 27, true);
          public          postgres    false    222            =           0    0 &   registro_compra_id_registro_compra_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public.registro_compra_id_registro_compra_seq', 9, true);
          public          postgres    false    220            >           0    0 $   registro_plato_id_registro_plato_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public.registro_plato_id_registro_plato_seq', 6, true);
          public          postgres    false    224            ?           0    0    sucursal_id_sucursal_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.sucursal_id_sucursal_seq', 3, true);
          public          postgres    false    216            @           0    0    usuario_id_usuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 26, true);
          public          postgres    false    218            �           2606    16439    menu menu_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY (id_menu);
 8   ALTER TABLE ONLY public.menu DROP CONSTRAINT menu_pkey;
       public            postgres    false    215            �           2606    16488    plato plato_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.plato
    ADD CONSTRAINT plato_pkey PRIMARY KEY (id_plato);
 :   ALTER TABLE ONLY public.plato DROP CONSTRAINT plato_pkey;
       public            postgres    false    223            �           2606    16469 $   registro_compra registro_compra_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.registro_compra
    ADD CONSTRAINT registro_compra_pkey PRIMARY KEY (id_registro_compra);
 N   ALTER TABLE ONLY public.registro_compra DROP CONSTRAINT registro_compra_pkey;
       public            postgres    false    221            �           2606    16502 "   registro_plato registro_plato_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.registro_plato
    ADD CONSTRAINT registro_plato_pkey PRIMARY KEY (id_registro_plato);
 L   ALTER TABLE ONLY public.registro_plato DROP CONSTRAINT registro_plato_pkey;
       public            postgres    false    225            �           2606    16448    sucursal sucursal_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.sucursal
    ADD CONSTRAINT sucursal_pkey PRIMARY KEY (id_sucursal);
 @   ALTER TABLE ONLY public.sucursal DROP CONSTRAINT sucursal_pkey;
       public            postgres    false    217            �           2606    16460    usuario usuario_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    219            �           2606    16475    registro_compra compra    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_compra
    ADD CONSTRAINT compra FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 @   ALTER TABLE ONLY public.registro_compra DROP CONSTRAINT compra;
       public          postgres    false    221    219    3209            �           2606    16503    registro_plato conserva    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_plato
    ADD CONSTRAINT conserva FOREIGN KEY (id_registro_compra) REFERENCES public.registro_compra(id_registro_compra);
 A   ALTER TABLE ONLY public.registro_plato DROP CONSTRAINT conserva;
       public          postgres    false    3211    221    225            �           2606    16508    registro_plato pertenece    FK CONSTRAINT     ~   ALTER TABLE ONLY public.registro_plato
    ADD CONSTRAINT pertenece FOREIGN KEY (id_plato) REFERENCES public.plato(id_plato);
 B   ALTER TABLE ONLY public.registro_plato DROP CONSTRAINT pertenece;
       public          postgres    false    3213    223    225            �           2606    16470    registro_compra recibe    FK CONSTRAINT     �   ALTER TABLE ONLY public.registro_compra
    ADD CONSTRAINT recibe FOREIGN KEY (id_sucursal) REFERENCES public.sucursal(id_sucursal);
 @   ALTER TABLE ONLY public.registro_compra DROP CONSTRAINT recibe;
       public          postgres    false    217    3207    221            �           2606    16489    plato tiene    FK CONSTRAINT     n   ALTER TABLE ONLY public.plato
    ADD CONSTRAINT tiene FOREIGN KEY (id_menu) REFERENCES public.menu(id_menu);
 5   ALTER TABLE ONLY public.plato DROP CONSTRAINT tiene;
       public          postgres    false    223    215    3205            $   u  x����n�0ǯ���ծ-�tR5Q�����R�I�`;��'vH�j�#��fkWM��Ί����4�i�|f<qHJ2�BZb�rR��B1U�@XfDX(��B9�$���@~FsPu�O�X}=9!���	�qZ�"<��7���L�sF7_�nJ�N�:q2��FX>�Mș{s����ͦ1��F6B����L�(� #j!�A�;�Uш���,	�,DS| _����	-z�Ec���k��a�`���	�O�3�_�> iC��
I�9��@��Z;���鑚E7�ˮ����e�����l�a��ּ�n<��X@�R���J
��iI�%��@�w���6W�#,"��+8�3�?-��b��l��^>��Sv[��[��E�c��ߓUq�&n�{p�O�o�"md�J�D*ő���������qr�y��R&�ݬ�������t¿��O�Z5݉��A�X�_�8��k�����΂Q���j��/��3�ˡ�2f�B�z��)�.Z������D?�x�{�Y�6���8.E�e�쏜�U[��ٓ��ڣ�ٰ_<+�3mc*V�O9A�/���;���s�G��B,�$%�5=6������4��x��uN����l<y�wI�w�u�4���E      ,   \  x���ώ�0���S�	"���+m�iE+.�z�I,Od�H�6}��z��:�� �G��Y���|��Ƥl�]��vJThD']�+l;/]�b#E�Z� �AtL��剽�o���=?��A��DK��4K�Ʉ��=��-�Ұ�g��'�c{%��x�ǝ&i��G�/�n�Nv�D,8M� <e�PXh��g�x�y`r��l�=Ӂv�9K��Y�Z�H�B��܌����x$�k%M/c��I9����[���%>%������zU�ZG,�Hʀ�N�[<ˣh��7���v�Ӕ���y#�\���_�Q5��3��&k��mB����Y�h3Qs�ݨZ�!���Zƌ�2�=0�Nي�>�8�c�ң�,�ŻJ#�}��d���؟��x�<0���-a'�q�R����
	8g׃�$T#EC�]��`����ԧ?NU����ݻ6�g�ˈ���.+fM���-"��E�Us��(��.�pr���_`�p���?3�o�N���Μg9Uݻs��@�[{煎�B
-�n��H��B�	[������p�i����>4�Yp'.G�g5\-���;;K&�e|6���l��
-�j��@x/��p��ϚG�      *   �   x���An�0E��)r�؁ �Ͳ�<(M�L��f�S��
RG�*]�?=����ʴ;x�%��WczC�Cj����'��I�4I��}�^$K�Z��/!���*�Jf��Z������~J�l�FY=�b�-�*���ۨ�	����U��ZftGdgt�hD���|����Ul�=i��-p��!ox�0n��_a-��[��E#���
      .   @   x��� A��PL������ױ��m�H������BLj��R��b٪��,�8�v��������      &   �   x�eλ
1��:y�k��u��Z��ڌk����6>��B�=p>~�vTk,p���,9�oS�aaB2%���G��H�2�6��b�2q�U	Nq*��8+�k|4Ic��6Vi�����9��)�栔XӠ�1%�wh{���K�9� Ӑ=;      (   �  x����N�0��㧈�3�����'$ڊ�R��a��ZJl�	ިG�a_��,l"�XN���g�o�1�H�>A�`E9�L���Q���F��	���M�%��2�03���uF[a�!����WA���Xa���6>�	�k�>��27R(�R))�Wʷ��ە��9j�
ITZ����|ǿoi�CȌ�ͻƵ-��3��g�G�7ۇEE����=�*%��iy��M�P����2 �s`g˵`Y�@5;?��Oؤ�5����E�w��Ù��tO{�}m�o4�0!|�9R\/ĸ�M�����ھFjQ	tp�y���7�>Ϛ��)�h6�K�׾���g���e���� �|�"a�P� �	U�m�W�*�R(gӺg��r���lGk^$NC�q��<�Z�{f�[N���")�|���mzF'OO�w�s��|�<g�����]E�fcM؈���WB
�     