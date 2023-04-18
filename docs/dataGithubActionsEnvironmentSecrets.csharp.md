# `data_github_actions_environment_secrets`

Refer to the Terraform Registory for docs: [`data_github_actions_environment_secrets`](https://registry.terraform.io/providers/integrations/github/5.23.0/docs/data-sources/actions_environment_secrets).

# `dataGithubActionsEnvironmentSecrets` Submodule <a name="`dataGithubActionsEnvironmentSecrets` Submodule" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubActionsEnvironmentSecrets <a name="DataGithubActionsEnvironmentSecrets" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/data-sources/actions_environment_secrets github_actions_environment_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsEnvironmentSecrets(Construct Scope, string Id, DataGithubActionsEnvironmentSecretsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig">DataGithubActionsEnvironmentSecretsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig">DataGithubActionsEnvironmentSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.resetFullName"></a>

```csharp
private void ResetFullName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsEnvironmentSecrets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsEnvironmentSecrets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsEnvironmentSecrets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList">DataGithubActionsEnvironmentSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.secrets"></a>

```csharp
public DataGithubActionsEnvironmentSecretsSecretsList Secrets { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList">DataGithubActionsEnvironmentSecretsSecretsList</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecrets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubActionsEnvironmentSecretsConfig <a name="DataGithubActionsEnvironmentSecretsConfig" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsEnvironmentSecretsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Environment,
    string FullName = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.environment">Environment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/data-sources/actions_environment_secrets#environment DataGithubActionsEnvironmentSecrets#environment}. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/data-sources/actions_environment_secrets#full_name DataGithubActionsEnvironmentSecrets#full_name}. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/data-sources/actions_environment_secrets#id DataGithubActionsEnvironmentSecrets#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/data-sources/actions_environment_secrets#name DataGithubActionsEnvironmentSecrets#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/data-sources/actions_environment_secrets#environment DataGithubActionsEnvironmentSecrets#environment}.

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/data-sources/actions_environment_secrets#full_name DataGithubActionsEnvironmentSecrets#full_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/data-sources/actions_environment_secrets#id DataGithubActionsEnvironmentSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/data-sources/actions_environment_secrets#name DataGithubActionsEnvironmentSecrets#name}.

---

### DataGithubActionsEnvironmentSecretsSecrets <a name="DataGithubActionsEnvironmentSecretsSecrets" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsEnvironmentSecretsSecrets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubActionsEnvironmentSecretsSecretsList <a name="DataGithubActionsEnvironmentSecretsSecretsList" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsEnvironmentSecretsSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.get"></a>

```csharp
private DataGithubActionsEnvironmentSecretsSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubActionsEnvironmentSecretsSecretsOutputReference <a name="DataGithubActionsEnvironmentSecretsSecretsOutputReference" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsEnvironmentSecretsSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecrets">DataGithubActionsEnvironmentSecretsSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecretsOutputReference.property.internalValue"></a>

```csharp
public DataGithubActionsEnvironmentSecretsSecrets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsEnvironmentSecrets.DataGithubActionsEnvironmentSecretsSecrets">DataGithubActionsEnvironmentSecretsSecrets</a>

---



