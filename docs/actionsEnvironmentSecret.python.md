# `actionsEnvironmentSecret` Submodule <a name="`actionsEnvironmentSecret` Submodule" id="@cdktf/provider-github.actionsEnvironmentSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsEnvironmentSecret <a name="ActionsEnvironmentSecret" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret github_actions_environment_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_secret

actionsEnvironmentSecret.ActionsEnvironmentSecret(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environment: str,
  repository: str,
  secret_name: str,
  encrypted_value: str = None,
  id: str = None,
  plaintext_value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.environment">environment</a></code> | <code>str</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.secretName">secret_name</a></code> | <code>str</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.encryptedValue">encrypted_value</a></code> | <code>str</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.plaintextValue">plaintext_value</a></code> | <code>str</code> | Plaintext value of the secret to be encrypted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.environment"></a>

- *Type:* str

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#environment ActionsEnvironmentSecret#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.repository"></a>

- *Type:* str

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#repository ActionsEnvironmentSecret#repository}

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.secretName"></a>

- *Type:* str

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#secret_name ActionsEnvironmentSecret#secret_name}

---

##### `encrypted_value`<sup>Optional</sup> <a name="encrypted_value" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.encryptedValue"></a>

- *Type:* str

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#encrypted_value ActionsEnvironmentSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plaintext_value`<sup>Optional</sup> <a name="plaintext_value" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.plaintextValue"></a>

- *Type:* str

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#plaintext_value ActionsEnvironmentSecret#plaintext_value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetEncryptedValue">reset_encrypted_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetPlaintextValue">reset_plaintext_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_encrypted_value` <a name="reset_encrypted_value" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetEncryptedValue"></a>

```python
def reset_encrypted_value() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_plaintext_value` <a name="reset_plaintext_value" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetPlaintextValue"></a>

```python
def reset_plaintext_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ActionsEnvironmentSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_secret

actionsEnvironmentSecret.ActionsEnvironmentSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_secret

actionsEnvironmentSecret.ActionsEnvironmentSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_secret

actionsEnvironmentSecret.ActionsEnvironmentSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_secret

actionsEnvironmentSecret.ActionsEnvironmentSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ActionsEnvironmentSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ActionsEnvironmentSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ActionsEnvironmentSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActionsEnvironmentSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValueInput">encrypted_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValueInput">plaintext_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValue">encrypted_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValue">plaintext_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `encrypted_value_input`<sup>Optional</sup> <a name="encrypted_value_input" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValueInput"></a>

```python
encrypted_value_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `plaintext_value_input`<sup>Optional</sup> <a name="plaintext_value_input" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValueInput"></a>

```python
plaintext_value_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `encrypted_value`<sup>Required</sup> <a name="encrypted_value" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValue"></a>

```python
encrypted_value: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `plaintext_value`<sup>Required</sup> <a name="plaintext_value" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValue"></a>

```python
plaintext_value: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsEnvironmentSecretConfig <a name="ActionsEnvironmentSecretConfig" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_environment_secret

actionsEnvironmentSecret.ActionsEnvironmentSecretConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environment: str,
  repository: str,
  secret_name: str,
  encrypted_value: str = None,
  id: str = None,
  plaintext_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.environment">environment</a></code> | <code>str</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.repository">repository</a></code> | <code>str</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.secretName">secret_name</a></code> | <code>str</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.encryptedValue">encrypted_value</a></code> | <code>str</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.plaintextValue">plaintext_value</a></code> | <code>str</code> | Plaintext value of the secret to be encrypted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#environment ActionsEnvironmentSecret#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#repository ActionsEnvironmentSecret#repository}

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#secret_name ActionsEnvironmentSecret#secret_name}

---

##### `encrypted_value`<sup>Optional</sup> <a name="encrypted_value" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.encryptedValue"></a>

```python
encrypted_value: str
```

- *Type:* str

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#encrypted_value ActionsEnvironmentSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plaintext_value`<sup>Optional</sup> <a name="plaintext_value" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.plaintextValue"></a>

```python
plaintext_value: str
```

- *Type:* str

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/actions_environment_secret#plaintext_value ActionsEnvironmentSecret#plaintext_value}

---



