# `github_user_invitation_accepter`

Refer to the Terraform Registory for docs: [`github_user_invitation_accepter`](https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/user_invitation_accepter).

# `userInvitationAccepter` Submodule <a name="`userInvitationAccepter` Submodule" id="@cdktf/provider-github.userInvitationAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserInvitationAccepter <a name="UserInvitationAccepter" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/user_invitation_accepter github_user_invitation_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer"></a>

```python
from cdktf_cdktf_provider_github import user_invitation_accepter

userInvitationAccepter.UserInvitationAccepter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allow_empty_id: typing.Union[bool, IResolvable] = None,
  id: str = None,
  invitation_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.allowEmptyId">allow_empty_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the ID to be unset. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/user_invitation_accepter#id UserInvitationAccepter#id}. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.invitationId">invitation_id</a></code> | <code>str</code> | ID of the invitation to accept. Must be set when 'allow_empty_id' is 'false'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_empty_id`<sup>Optional</sup> <a name="allow_empty_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.allowEmptyId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the ID to be unset.

This will result in the resource being skipped when the ID is not set instead of returning an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/user_invitation_accepter#allow_empty_id UserInvitationAccepter#allow_empty_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/user_invitation_accepter#id UserInvitationAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invitation_id`<sup>Optional</sup> <a name="invitation_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.invitationId"></a>

- *Type:* str

ID of the invitation to accept. Must be set when 'allow_empty_id' is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/user_invitation_accepter#invitation_id UserInvitationAccepter#invitation_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetAllowEmptyId">reset_allow_empty_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetInvitationId">reset_invitation_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allow_empty_id` <a name="reset_allow_empty_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetAllowEmptyId"></a>

```python
def reset_allow_empty_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_invitation_id` <a name="reset_invitation_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetInvitationId"></a>

```python
def reset_invitation_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import user_invitation_accepter

userInvitationAccepter.UserInvitationAccepter.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import user_invitation_accepter

userInvitationAccepter.UserInvitationAccepter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import user_invitation_accepter

userInvitationAccepter.UserInvitationAccepter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.allowEmptyIdInput">allow_empty_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.invitationIdInput">invitation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.allowEmptyId">allow_empty_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.invitationId">invitation_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_empty_id_input`<sup>Optional</sup> <a name="allow_empty_id_input" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.allowEmptyIdInput"></a>

```python
allow_empty_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `invitation_id_input`<sup>Optional</sup> <a name="invitation_id_input" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.invitationIdInput"></a>

```python
invitation_id_input: str
```

- *Type:* str

---

##### `allow_empty_id`<sup>Required</sup> <a name="allow_empty_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.allowEmptyId"></a>

```python
allow_empty_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `invitation_id`<sup>Required</sup> <a name="invitation_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.invitationId"></a>

```python
invitation_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserInvitationAccepterConfig <a name="UserInvitationAccepterConfig" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import user_invitation_accepter

userInvitationAccepter.UserInvitationAccepterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allow_empty_id: typing.Union[bool, IResolvable] = None,
  id: str = None,
  invitation_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.allowEmptyId">allow_empty_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow the ID to be unset. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/user_invitation_accepter#id UserInvitationAccepter#id}. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.invitationId">invitation_id</a></code> | <code>str</code> | ID of the invitation to accept. Must be set when 'allow_empty_id' is 'false'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_empty_id`<sup>Optional</sup> <a name="allow_empty_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.allowEmptyId"></a>

```python
allow_empty_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow the ID to be unset.

This will result in the resource being skipped when the ID is not set instead of returning an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/user_invitation_accepter#allow_empty_id UserInvitationAccepter#allow_empty_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/user_invitation_accepter#id UserInvitationAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invitation_id`<sup>Optional</sup> <a name="invitation_id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.invitationId"></a>

```python
invitation_id: str
```

- *Type:* str

ID of the invitation to accept. Must be set when 'allow_empty_id' is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/user_invitation_accepter#invitation_id UserInvitationAccepter#invitation_id}

---



