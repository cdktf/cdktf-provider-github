# `github_actions_repository_access_level`

Refer to the Terraform Registory for docs: [`github_actions_repository_access_level`](https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_access_level).

# `actionsRepositoryAccessLevel` Submodule <a name="`actionsRepositoryAccessLevel` Submodule" id="@cdktf/provider-github.actionsRepositoryAccessLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRepositoryAccessLevel <a name="ActionsRepositoryAccessLevel" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_access_level github_actions_repository_access_level}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_repository_access_level

actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str,
  repository: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Where the actions or reusable workflows of the repository may be used. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_access_level#id ActionsRepositoryAccessLevel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.accessLevel"></a>

- *Type:* str

Where the actions or reusable workflows of the repository may be used.

Possible values are 'none', 'user', 'organization', or 'enterprise'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_access_level#access_level ActionsRepositoryAccessLevel#access_level}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.repository"></a>

- *Type:* str

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_access_level#repository ActionsRepositoryAccessLevel#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_access_level#id ActionsRepositoryAccessLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import actions_repository_access_level

actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import actions_repository_access_level

actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import actions_repository_access_level

actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRepositoryAccessLevelConfig <a name="ActionsRepositoryAccessLevelConfig" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_repository_access_level

actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str,
  repository: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Where the actions or reusable workflows of the repository may be used. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.repository">repository</a></code> | <code>str</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_access_level#id ActionsRepositoryAccessLevel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Where the actions or reusable workflows of the repository may be used.

Possible values are 'none', 'user', 'organization', or 'enterprise'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_access_level#access_level ActionsRepositoryAccessLevel#access_level}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_access_level#repository ActionsRepositoryAccessLevel#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryAccessLevel.ActionsRepositoryAccessLevelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_access_level#id ActionsRepositoryAccessLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



