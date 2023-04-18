# `github_repository_deploy_key`

Refer to the Terraform Registory for docs: [`github_repository_deploy_key`](https://www.terraform.io/docs/providers/github/r/repository_deploy_key).

# `repositoryDeployKey` Submodule <a name="`repositoryDeployKey` Submodule" id="@cdktf/provider-github.repositoryDeployKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryDeployKey <a name="RepositoryDeployKey" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key github_repository_deploy_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_deploy_key

repositoryDeployKey.RepositoryDeployKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  repository: str,
  title: str,
  id: str = None,
  read_only: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.key">key</a></code> | <code>str</code> | A SSH key. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Name of the GitHub repository. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.title">title</a></code> | <code>str</code> | A title. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#id RepositoryDeployKey#id}. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean qualifying the key to be either read only or read/write. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.key"></a>

- *Type:* str

A SSH key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#key RepositoryDeployKey#key}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.repository"></a>

- *Type:* str

Name of the GitHub repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#repository RepositoryDeployKey#repository}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.title"></a>

- *Type:* str

A title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#title RepositoryDeployKey#title}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#id RepositoryDeployKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.Initializer.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean qualifying the key to be either read only or read/write.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#read_only RepositoryDeployKey#read_only}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import repository_deploy_key

repositoryDeployKey.RepositoryDeployKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import repository_deploy_key

repositoryDeployKey.RepositoryDeployKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import repository_deploy_key

repositoryDeployKey.RepositoryDeployKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryDeployKeyConfig <a name="RepositoryDeployKeyConfig" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_deploy_key

repositoryDeployKey.RepositoryDeployKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  repository: str,
  title: str,
  id: str = None,
  read_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.key">key</a></code> | <code>str</code> | A SSH key. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.repository">repository</a></code> | <code>str</code> | Name of the GitHub repository. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.title">title</a></code> | <code>str</code> | A title. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#id RepositoryDeployKey#id}. |
| <code><a href="#@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean qualifying the key to be either read only or read/write. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.key"></a>

```python
key: str
```

- *Type:* str

A SSH key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#key RepositoryDeployKey#key}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Name of the GitHub repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#repository RepositoryDeployKey#repository}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.title"></a>

```python
title: str
```

- *Type:* str

A title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#title RepositoryDeployKey#title}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#id RepositoryDeployKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-github.repositoryDeployKey.RepositoryDeployKeyConfig.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean qualifying the key to be either read only or read/write.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_deploy_key#read_only RepositoryDeployKey#read_only}

---



