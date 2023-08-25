# `github_codespaces_user_secret`

Refer to the Terraform Registory for docs: [`github_codespaces_user_secret`](https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret).

# `codespacesUserSecret` Submodule <a name="`codespacesUserSecret` Submodule" id="@cdktf/provider-github.codespacesUserSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodespacesUserSecret <a name="CodespacesUserSecret" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret github_codespaces_user_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_github import codespaces_user_secret

codespacesUserSecret.CodespacesUserSecret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret_name: str,
  encrypted_value: str = None,
  id: str = None,
  plaintext_value: str = None,
  selected_repository_ids: typing.List[typing.Union[int, float]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.secretName">secret_name</a></code> | <code>str</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.encryptedValue">encrypted_value</a></code> | <code>str</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#id CodespacesUserSecret#id}. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.plaintextValue">plaintext_value</a></code> | <code>str</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.selectedRepositoryIds">selected_repository_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | An array of repository ids that can access the user secret. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.secretName"></a>

- *Type:* str

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#secret_name CodespacesUserSecret#secret_name}

---

##### `encrypted_value`<sup>Optional</sup> <a name="encrypted_value" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.encryptedValue"></a>

- *Type:* str

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#encrypted_value CodespacesUserSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#id CodespacesUserSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plaintext_value`<sup>Optional</sup> <a name="plaintext_value" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.plaintextValue"></a>

- *Type:* str

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#plaintext_value CodespacesUserSecret#plaintext_value}

---

##### `selected_repository_ids`<sup>Optional</sup> <a name="selected_repository_ids" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.Initializer.parameter.selectedRepositoryIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

An array of repository ids that can access the user secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#selected_repository_ids CodespacesUserSecret#selected_repository_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.resetEncryptedValue">reset_encrypted_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.resetPlaintextValue">reset_plaintext_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.resetSelectedRepositoryIds">reset_selected_repository_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_encrypted_value` <a name="reset_encrypted_value" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.resetEncryptedValue"></a>

```python
def reset_encrypted_value() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_plaintext_value` <a name="reset_plaintext_value" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.resetPlaintextValue"></a>

```python
def reset_plaintext_value() -> None
```

##### `reset_selected_repository_ids` <a name="reset_selected_repository_ids" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.resetSelectedRepositoryIds"></a>

```python
def reset_selected_repository_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import codespaces_user_secret

codespacesUserSecret.CodespacesUserSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import codespaces_user_secret

codespacesUserSecret.CodespacesUserSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import codespaces_user_secret

codespacesUserSecret.CodespacesUserSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.encryptedValueInput">encrypted_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.plaintextValueInput">plaintext_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.selectedRepositoryIdsInput">selected_repository_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.encryptedValue">encrypted_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.plaintextValue">plaintext_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.selectedRepositoryIds">selected_repository_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `encrypted_value_input`<sup>Optional</sup> <a name="encrypted_value_input" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.encryptedValueInput"></a>

```python
encrypted_value_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `plaintext_value_input`<sup>Optional</sup> <a name="plaintext_value_input" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.plaintextValueInput"></a>

```python
plaintext_value_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `selected_repository_ids_input`<sup>Optional</sup> <a name="selected_repository_ids_input" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.selectedRepositoryIdsInput"></a>

```python
selected_repository_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `encrypted_value`<sup>Required</sup> <a name="encrypted_value" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.encryptedValue"></a>

```python
encrypted_value: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `plaintext_value`<sup>Required</sup> <a name="plaintext_value" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.plaintextValue"></a>

```python
plaintext_value: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `selected_repository_ids`<sup>Required</sup> <a name="selected_repository_ids" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.selectedRepositoryIds"></a>

```python
selected_repository_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodespacesUserSecretConfig <a name="CodespacesUserSecretConfig" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import codespaces_user_secret

codespacesUserSecret.CodespacesUserSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret_name: str,
  encrypted_value: str = None,
  id: str = None,
  plaintext_value: str = None,
  selected_repository_ids: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.secretName">secret_name</a></code> | <code>str</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.encryptedValue">encrypted_value</a></code> | <code>str</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#id CodespacesUserSecret#id}. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.plaintextValue">plaintext_value</a></code> | <code>str</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.selectedRepositoryIds">selected_repository_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | An array of repository ids that can access the user secret. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#secret_name CodespacesUserSecret#secret_name}

---

##### `encrypted_value`<sup>Optional</sup> <a name="encrypted_value" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.encryptedValue"></a>

```python
encrypted_value: str
```

- *Type:* str

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#encrypted_value CodespacesUserSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#id CodespacesUserSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plaintext_value`<sup>Optional</sup> <a name="plaintext_value" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.plaintextValue"></a>

```python
plaintext_value: str
```

- *Type:* str

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#plaintext_value CodespacesUserSecret#plaintext_value}

---

##### `selected_repository_ids`<sup>Optional</sup> <a name="selected_repository_ids" id="@cdktf/provider-github.codespacesUserSecret.CodespacesUserSecretConfig.property.selectedRepositoryIds"></a>

```python
selected_repository_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

An array of repository ids that can access the user secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_user_secret#selected_repository_ids CodespacesUserSecret#selected_repository_ids}

---



